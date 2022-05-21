const router =require("express").Router();
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");

const User =require("../models/User");


router.post("/login");
router.post("/register" ,async(req,res) => {
    const {name,email,password} =req.body;

    //Send an error message saying  that  all the fiels should require
    if(!name || !email || !password)
    return res
    .status(400)
    .json({error :`Please enter all the required fields!!`});
    

    //name validation
    if(name.length > 30)
    return res
        .status(400)
        .json({error:   "Name cannot be longer than 30 characters!!"});


    //email validation using regex
    const emailReg = 
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //if email is incorrect print an error message
    if (!emailReg.test(email)) 
    return res
        .status(400)
        .json({error: "Please enter a valid email address!!"});


    //password validation
    if(password.length < 6)
    return res
        .status(400)
        .json({error:"Password must be at least 6 characters!!"});

    try{

        //check for repeated emails
        const doesUserAlreadyExist=await User.findOne({ email }); 
        if(doesUserAlreadyExist)
            return res  
                .status(400)
                .json({error:` already used to create an account !! Please try with a new email `});


        const hashedPassword =await bcrypt.hash(password,12); //password bcrypt
        const newUser=new User({name,email,password:hashedPassword});

        //save the user
        const result =await newUser.save();
        result._doc.password=undefined;
        return res.status(201).json({...result._doc});

    }catch(err){
        console.log(err);
        return res.status(500).json({error: err.message});
    }
});

//================================================user logiin part==============================================================================
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "please enter all the required fields!" });
  
    // email validation.
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!emailReg.test(email))
      return res
        .status(400)
        .json({ error: "please enter a valid email address." });
  
    try {
      const doesUserExits = await User.findOne({ email });
  
      if (!doesUserExits)
        return res.status(400).json({ error: "Invalid email or password!" });
  
      // if there were any user present.
      const doesPasswordMatch = await bcrypt.compare(
        password,
        doesUserExits.password
      );
  
      if (!doesPasswordMatch)
        return res.status(400).json({ error: "Invalid email or password!" });
  
      const payload = { _id: doesUserExits._id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      const user = { ...doesUserExits._doc, password: undefined };
      return res.status(200).json({ token, user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  });
  
 

module.exports=router;
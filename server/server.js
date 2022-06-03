require('dotenv').config()
//import { connect } from './utils/database.connection'
const express = require('express')


const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const bodyParser = require("body-parser");
const db=require("./db");
const auth = require("./routes/auth1");
const file = require('./routes/file');
const auth2 = require("./routes/auth2");
const auth3 = require("./routes/auth3");
const auth4 = require("./routes/auth4");
const auth5 = require("./routes/auth5");

const app = express();
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
    res.header('Access-Control-Expose-Headers', 'Authorization');
    next();
  }
  
  app.use(allowCrossDomain);
  app.use(bodyParser.json());
  //app.use(morgan("tiny"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json({ limit: "20mb" }));
  app.use(fileUpload());
  
  auth(app);
  auth2(app);
  auth3(app);
  auth4(app);
  auth5(app);
  file(app);
  


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))





const markingSchemaRoutes = require('./api/routes/markingSchema.r');
app.use(markingSchemaRoutes);

const panelSchemaRoutes = require('./api/routes/panel.r');
app.use(panelSchemaRoutes);





// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))


// Connect to mongodb

    if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
console.log('Server is running on port', PORT)
})
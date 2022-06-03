const mongoose = require("mongoose");
const config = require("../config");
const MONGODB_URL = `mongodb+srv://kavitha:kavitha@cluster0.p9srl.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((resp) => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log(`Error connecting to mongo db : ${err}}`);
  });
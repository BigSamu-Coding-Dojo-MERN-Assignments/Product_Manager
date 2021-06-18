// ---------------------------------------------------
// DATABASE SETUP
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require("mongoose"); 

// 2) Setting connection to Mongo DB using 'mongoose' instance
mongoose.connect("mongodb://localhost/product-manager-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Sucessfully connected to Database"))
  .catch(err => console.log("Something went wrong when connecting to the database: ", err));

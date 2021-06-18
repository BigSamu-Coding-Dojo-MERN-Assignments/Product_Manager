// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Importing External Libraries (Express and Cors) 
const express = require('express'); 
const cors = require('cors'); 

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000; 

// 3) Enabling cros-origin requests on Express server with client side
app.use(cors());

// 4) Enabling settings for being able to read JSON and parse data in body of POST requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 5) Initializing connection to NoSQL database (MongoDB) using Moongose interface
require("./config/mongoose.config");

// 6) Importing API routes passing the Express instance 'app'
require("./routes/product.routes")(app);

// 7) Running instance of Express server in selected port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`) 
});
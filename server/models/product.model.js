// ---------------------------------------------------
// MODEL SETUP
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require('mongoose'); 

// 2) Creating Schema for Model (blueprint)
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }  
}, { timestamps: true });

// 3) Creating collection by Shema setted up
const ProductModel = mongoose.model("Product", ProductSchema);

// 4) Exporting Model
module.exports = ProductModel;

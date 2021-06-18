// ---------------------------------------------------
// CONTROLLER SETUP - PRODUCT
// ---------------------------------------------------

// 1) Importing Model
const ProductModel = require('../models/product.model');

// 2) Setting up and exporting CRUD API requests to server
module.exports = {

    // I) GET REQUESTS

    // Show Index - GET Request
    index:  (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    // Find all Products
    findAllProducts: (req, res) => {
        ProductModel.find()
            .then((allProducts) => res.json(allProducts)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },
    // Get a Product by Id
    findProductById: (req, res) => {
        ProductModel.findOne({ _id: req.params.id }) 
            .then((oneSingleProduct) => res.json(oneSingleProduct)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },
    
    // II) POST REQUESTS
    // Create a Product
    createNewProduct: (req, res) => {
        ProductModel.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },

    // III) UPDATE REQUESTS
    // Update a Product by Id
    updateProductById: (req, res) => {
        ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) 
            .then((updatedProduct) => res.json(updatedProduct)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },

    // IV) DELETE REQUESTS  
    // Delete all Products
    deleteAllProducts: (req, res) => {
        ProductModel.deleteMany({}) 
            .then((allDeletedProducts) => res.json(allDeletedProducts)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err }));
    },
    // Update a Product by Id
    deleteProductById: (req, res) => {
        ProductModel.deleteOne({ _id: req.params.id }) 
            .then((deletedProduct) => res.json(deletedProduct)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err }));
    },
};
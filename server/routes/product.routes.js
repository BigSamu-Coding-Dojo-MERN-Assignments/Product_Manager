// ---------------------------------------------------
// ROUTES SETUP - PRODUCT
// ---------------------------------------------------

// 1) Importing Controller
const ProductController = require("../controllers/product.controller");

// 2) Setting up and exporting API routes for requests

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findProductById);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.put("/api/products/edit/:id", ProductController.updateProductById);
    app.delete("/api/products/delete", ProductController.deleteAllProducts);
    app.delete("/api/products/delete/:id", ProductController.deleteProductById);
};
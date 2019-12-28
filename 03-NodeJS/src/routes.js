const express = require('express');
const routes = express.Router();

// Require  ProductController to use GET and POST Methods
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);    // Read
routes.get('/products/:id', ProductController.show); // Show (Product by ID)
routes.post('/products', ProductController.store);   // Create
routes.put('/products', ProductController.update);   // Update
routes.delete('/products', ProductController.destroy);   // Update

// Output
module.exports = routes;
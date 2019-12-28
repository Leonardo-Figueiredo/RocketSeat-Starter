const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initializate app
const app = express();
app.use(express.json());

// Security to acess the API with other domains
app.use(cors());

// Initializate DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
  useNewUrlParser: true,
  useUnifiedTopology:true,
});
requireDir('./src/models');

// const Product = mongoose.model('Product');

// Receive all requests and send to router
app.use('/api', require('./src/routes'));

// Listen Port to open the application
app.listen(3001);
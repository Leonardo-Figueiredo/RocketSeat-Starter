const mongoose = require('mongoose');
// Especifies the model
const Product = mongoose.model('Product');

// Output
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({  }, { page, limit:5 });
    return res.json(products);
  },

  async show(req, res) {
      // req.param.id catch the request id
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res) {
      //req.body = body of request
    const product = await Product.create(req.body);
    return res.json(product);
  },
      //New: true to update new changes 
  async update(req, res) {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, { 
      new: true 
    });
    return res.json(product);
  },
    //Delete the first line in DB
  async destroy(req,res){
    await Product.findOneAndDelete(req.params.id);
    
    return res.send();
  }
}
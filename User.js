var mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    pro_id:  String, // String is shorthand for {type: String}
    // pro_name: String,
    // pro_rate : Number,
    // ret_name : String,
    // ret_phone : Number,
    // ret_address : String
    
  });

  const blog = mongoose.model('Blog', blogSchema);

  module.exports = blog;
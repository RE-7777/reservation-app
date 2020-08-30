const mongoose=require('mongoose');
const Schema = mongoose.Schema;

 
const ProductSchma = new Schema({
  coverImage: String,
  name:{type:String,required:true, max:[60,'最大60文字']},
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingMessage1: String,
  headingMessage2: String,
  headingMessage3: String,
});

module.exports=mongoose.model('Product',ProductSchma);
const mongoose = require("mongoose");
const connectionparams={
  useNewUrlParser:true,
  useUnifiedTopology:true
}


const connect = mongoose.connect("mongodb+srv://shubham09:qwerty12@cluster0.ry4r4.mongodb.net/CW-products?retryWrites=true&w=majority",connectionparams)

module.exports=connect
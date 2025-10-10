const mongoose = require ('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },category: {
        type: String
      },
      image: {
        type: String, 
      },
      model3D: {
        type: String, // URL of 3D model file (for AR)
      },
    }, { timestamps: true })

    const Product = mongoose.model('Product', productSchema);

    module.exports = Product;
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017//scatch");

const productSchema = mongoose.Schema({
    images: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0 
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

module.exports = mongose.model("user", productSchema);
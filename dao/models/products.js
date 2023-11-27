// En dao/models/products.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    // Otros campos relevantes para tus productos
});

module.exports = mongoose.model('Product', productSchema);

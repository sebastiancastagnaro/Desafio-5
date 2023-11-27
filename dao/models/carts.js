// En dao/models/carts.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    totalPrice: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);

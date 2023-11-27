// En dao/models/messages.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String, // Correo del usuario
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);

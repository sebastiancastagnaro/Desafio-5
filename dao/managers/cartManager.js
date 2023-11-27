const Cart = require('../models/carts');

class CartManager {
  static async getCartById(cartId) {
    return Cart.findById(cartId);
  }

  static async createCart(userId, items) {
    const newCart = new Cart({
      userId,
      items,
      totalPrice: 0, // Puedes ajustar esto según tu lógica
    });
    return newCart.save();
  }

  static async updateCart(cartId, newItems) {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      throw new Error('Carrito no encontrado');
    }

    cart.items = newItems;
    // Puedes agregar lógica para recalcular el precio total u otros campos según tus necesidades
    return cart.save();
  }

  static async deleteCart(cartId) {
    return Cart.findByIdAndDelete(cartId);
  }
}

module.exports = CartManager;

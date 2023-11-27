const Product = require('../models/products');

class ProductManager {
  static async getAllProducts() {
    return Product.find();
  }

  static async getProductById(productId) {
    return Product.findById(productId);
  }

  static async createProduct(productData) {
    const newProduct = new Product(productData);
    return newProduct.save();
  }

  static async updateProduct(productId, newData) {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }

    // Actualizar campos según necesidades
    product.name = newData.name || product.name;
    product.description = newData.description || product.description;
    product.price = newData.price || product.price;

    return product.save();
  }

  static async deleteProduct(productId) {
    return Product.findByIdAndDelete(productId);
  }
}

module.exports = ProductManager;

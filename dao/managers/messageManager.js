const Message = require('../models/messages');

class MessageManager {
  static async getAllMessages() {
    return Message.find();
  }

  static async createMessage(user, message) {
    const newMessage = new Message({
      user,
      message,
    });
    return newMessage.save();
  }
}

module.exports = MessageManager;

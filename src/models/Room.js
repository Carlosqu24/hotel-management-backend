const mongoose = require('mongoose');

const { Schema } = mongoose;

const roomSchema = new Schema({
      name: { type: String, required: true },
      description: { type: String, required: true },
      type: { type: String },
      imageURL: { type: String },
      created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Rooms', roomSchema);
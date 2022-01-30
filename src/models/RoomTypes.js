const mongoose = require('mongoose');

const { Schema } = mongoose;

const roomTypesSchema = new Schema({
      name: { type: String, required: true },
      created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('RoomTypes', roomTypesSchema);
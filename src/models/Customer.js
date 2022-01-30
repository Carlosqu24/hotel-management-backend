const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String },
      phoneNumber: { type: String },
      address: { type: String },
      created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Customers', customerSchema);
const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
      name: {
            type: String,
            unique: true
      }
});


module.exports = mongoose.model('Roles', roleSchema);
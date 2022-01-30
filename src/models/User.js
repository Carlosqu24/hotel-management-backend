const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require("bcryptjs")

const userSchema = new Schema({
      username: {
            type: String,
            unique: true
      },
      email: {
            type: String,
            unique: true
      },
      password: {
            type: String,
            required: true
      },
      roles: [
            {
                  type: Schema.Types.ObjectId,
                  ref: "Roles"
            }
      ]
});

userSchema.statics.encryptPassword = async (password) => {
      const salt = await bcrypt.genSalt(10);

      return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
      return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model('Users', userSchema);
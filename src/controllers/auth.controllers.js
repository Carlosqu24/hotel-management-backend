const authController = {};

const User = require('../models/User');
const Role = require('../models/Role');

const jwt = require('jsonwebtoken');
const config = require('../config')

authController.signUp = async (req, res) => {
      const { username, email, password, roles } = req.body;

      const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
      });

      if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });

            newUser.roles = foundRoles.map(role => role._id);
      } else {
            const role = await Role.findOne({ name: "user" });

            newUser.roles = [role._id];
      };

      const savedUser = await newUser.save();

      const token = jwt.sign({
            id: savedUser._id },
            config.SECRET,
            {
                  expiresIn: 86400
            }
      );

      res.json({ token });
};


authController.signIn = async (req, res) => {
      const foundUser = await User.findOne({ email: req.body.email }).populate('roles')

      if (!foundUser) return res.status(400).json({ message: "User not found" });

      const matchPassword = await User.comparePassword(req.body.password, foundUser.password)
      if (!matchPassword) return res.status(401).json({ token: null, message: "Invalid password" });

      const token = jwt.sign({ id: foundUser._id }, config.SECRET, { expiresIn: 86400 });

      res.json(token);
};


module.exports = authController;
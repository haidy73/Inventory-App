const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const { validateRegisterInput } = require('../validations/auth.validation.js');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const errors = validateRegisterInput({ username, email, password });
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      data: { id: user._id, name: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { register };
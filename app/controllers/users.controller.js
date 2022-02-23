const User = require('../models/users');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
    }
  },
};

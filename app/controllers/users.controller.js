const User = require('../models/users');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      if (users.length > 0) {
        return res.status(200).json({ users });
      } else {
        return res.status(200).json('No User Registered');
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = {
        username: username,
        email: email,
        password: password,
      };
      const userCreated = await User.create(user);
      return res.status(201).json({ userCreated });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: 'No User Found With the Given Id' });
    }
    return res.status(200).json(user);
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: 'No User Found With the Given Id' });
    }
    const userDeleted = await User.destroy({ where: { id: id } });
    return res.status(200).json('Succesfully Deleted');
  },

  async updateUser(req, res) {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const user_data = {
      username,
      email,
      password,
    };
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: 'No User Found With the Given Id' });
    }
    const userUpdated = await User.update(user_data, { where: { id } });
    return res.status(200).json('Succesfully Updated');
  },
};

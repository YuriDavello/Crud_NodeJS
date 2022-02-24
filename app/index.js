const express = require('express');
const usersRoutes = require('./routes/users.routes');
const sequelize = require('./util/database');
const User = require('./models/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.use('/users', usersRoutes);

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.EXTERNAL_PORT);
  } catch (error) {
    console.error(error);
  }
})();

const { Sequelize } = require('sequelize');

try {
  const sequelize = new Sequelize('taskivities', 'postgres', '4589', {
    host: 'localhost',
    dialect: 'postgres',
  });

  sequelize.authenticate().then(res => console.log('res'));
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

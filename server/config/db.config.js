
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_registration_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };

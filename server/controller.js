require('dotenv').config();
const Sequelize = require('sequelize');
const {CONNECTION_STRING} = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
});

module.exports = {
    seed: (req, res) => {sequelize.query(`
    CREATE TABLE ;
`
).then(() => {
    console.log('Test table dropped!')
    res.sendStatus(200)
}).catch(err => console.log('error seeding DB', err))}
}

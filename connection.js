const Sequelize = require('sequelize');

require('dotenv').config();
/*
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'great', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
*/

//this code came from
//https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}


module.exports = sequelize;

var mysql = require('mysql');
var {Op, Sequelize, where} = require('sequelize');

const db = {};
const sequelize = new Sequelize(
    'qurydb', 
    'admin',
    'qurymon$$$1', 
    {
    host: 'qurydb.cmjarulgsvpp.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port:'3306',
    pool: {
        max: 5,
        min: 0,
        idle: 15000
    }
});

const loadDatabase = () => {
    var {Op, Sequelize} = require('sequelize');
    return new Promise(
      (resolve, reject) => {
        
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
            //Models/tables
            //db.usuarios = require('./models/usuarios.js')(sequelize,Sequelize); 
            //db.productos = require('./models/productos.js')(sequelize,Sequelize); 

            db.Sequelize = Sequelize;  
            db.sequelize = sequelize;
            //db.usuarios.hasMany(db.productos, {foreignKey: 'usuario_id'})

            db.op=Op;
            // resolve("on sequelize authenticate()"+db);

            resolve(db);
          }).catch(err => {
            console.error('Unable to connect to the database:', err);
            reject(err);
          });
      });
}

exports.loadDatabase = loadDatabase
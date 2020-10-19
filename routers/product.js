var express = require('express');
var api = express.Router();
const bodyParser = require('body-parser');
api.use(bodyParser);

const loadData = require('../modules/db');
const entity = require('../modules/model');
const dbInstance = loadData.loadDatabase();

api.get('/products',  () =>{
  return new Promise(
    (resolve, reject) => {
      dbInstance
      .then((db) => {
        console.log(`On load database`);
        db.products = require('../models/productos.js')(db.sequelize,db.Sequelize); 
        //db.products.hasMany(db.productos, {foreignKey: 'usuario_id'})
        resolve(entity.getListEntity(db.products));
      })
      .catch((ex) => {
        console.log(`Error: ${ex.message}`);
        reject( `Ok, something went seriously wrong...\n ${ex.message}`);
      });
  });    
});

api.post('/products',  (req) =>{
  const { nombres, apellidos, title, fechaNacimiento } = req.body;
  console.log("body from request: ",req.body)
  return new Promise(
    (resolve, reject) => {
      dbInstance
      .then((db) => {
        console.log(`On load database`);
        resolve(entity.addEntity(db.products, req.body));
        //resolve(db);
      })
      .catch((ex) => {
        console.log(`Error: ${ex.message}`);
        reject( `Ok, something went seriously wrong...\n ${ex.message}`);
      });
  });    
});

api.patch('/products', (req) => {
  return new Promise(
    (resolve, reject) => {
      dbInstance
      .then((db) => {
        console.log(`On load database`);
        resolve(entity.updateEntity(db.products, req.body));
      })
      .catch((ex) => {
        console.log(`Error: ${ex.message}`);
        reject( `Ok, something went seriously wrong...\n ${ex.message}`);
      });
  });
});

api.delete('/products', (req) => {
  return new Promise(
    (resolve, reject) => {
      dbInstance
      .then((db) => {
        console.log(`post load database`);
        resolve(entity.deleteEntity(db.products, req.body));
      })
      .catch((ex) => {
        console.log(`Error: ${ex.message}`);
        reject( `Ok, something went seriously wrong...\n ${ex.message}`);
      });
  });
});


module.exports = api;

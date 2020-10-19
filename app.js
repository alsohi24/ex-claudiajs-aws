'use strict'
var express = require('express');
var app     = express();
var router = express.Router();

const apiuser = require('./routers/user');
const apiproduct = require('./routers/product');

//router.use('/usuarios', apiuser);
//router.use('/products', apiproduct);

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`)
})

const loadData = require('./modules/db');
const entity = require('./modules/model');
const dbInstance = loadData.loadDatabase();

app.get('/products',  () =>{
  return new Promise(
    (resolve, reject) => {
      dbInstance
      .then((db) => {
        console.log(`On load database`);
        //db.products = require('./models/productos')(db.sequelize,db.Sequelize); 
        //db.products.hasMany(db.productos, {foreignKey: 'usuario_id'})
        resolve("entity.getListEntity(db.products)");
      })
      .catch((ex) => {
        console.log(`Error: ${ex.message}`);
        reject( `Ok, something went seriously wrong...\n ${ex.message}`);
      });
  });    
});

//app.use('/', router);

module.exports = app;

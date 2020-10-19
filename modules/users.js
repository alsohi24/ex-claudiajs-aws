const getUsuarios = () => {
    return new Promise(
      (resolve, reject) => {
        db.usuarios.findAll().then(function(result) {
          db.sequelize.connectionManager.close();
          resolve(result);
      }).error(function (err) {
          console.log("Error:" + err);
          reject(err);
      });
    });
  }
  
  const getUsuariosAndProds = (db) => {
      return new Promise(
        (resolve, reject) => {
          //db.productos.belongsTo(db.usuarios, {foreignKey: 'id'})
          db.usuarios.findAll({
            include: [
              {
                model: db.productos,
              },
            ],
          }).then(function(result) {
            //db.sequelize.connectionManager.close();
            resolve(result);
        }).error(function (err) {
            console.log("Error:" + err);
            reject(err);
        });
      });
    }
    const createUsers = (db, obj) => {
      return new Promise(
        (resolve, reject) => {
          //modelsUser
          db.usuarios
          .build(obj).save()
          .then(function(anotherTask) {
            resolve("POST OK"); 
          }).catch(function(error) {
            reject(error);
          })
        });
    }
  
    const updateUser = (db, obj) => {
      var ident = obj.id;
      delete obj["id"];
      console.log("payload on update", obj)
      return new Promise(
        (resolve, reject) => {
          //modelsUser
          db.usuarios
          .update(obj, { where: {id: ident} })
          .then(function(anotherTask) {
            resolve("PATCH OK"); 
          }).catch(function(error) {
            reject(error);
          })
        });
    }
  
    //"delete"
    const deleteUser = (db, obj)  => {
      //var ident = obj.id;
      console.log("payload on delete", obj)
      return new Promise(
        (resolve, reject) => {
          //modelsUser
          db.usuarios
          .update({estado: 0}, { where: obj })
          .then(function(anotherTask) {
            resolve("DELETE OK"); 
          }).catch(function(error) {
            reject(error);
          })
        });
     }
  
     //delete--ahora si de adeveras
     const destroyUser = (db, obj)  => {
      //var ident = obj.id;
      console.log("payload on delete", obj)
      return new Promise(
        (resolve, reject) => {
          //modelsUser
          db.usuarios
          .destroy({ where: obj })
          .then(function(anotherTask) {
            resolve("DESTROY OK"); 
          }).catch(function(error) {
            reject(error);
          })
        });
     }

exports.getUsuarios = getUsuarios
exports.getUsuariosAndProds = getUsuariosAndProds
exports.createUsers = createUsers
exports.updateUser = updateUser
exports.deleteUser = deleteUser
exports.destroyUser = destroyUser
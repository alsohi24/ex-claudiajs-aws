const getListEntity = (entity) => {
    return new Promise(
      (resolve, reject) => {
        entity.findAll().then(function(result) {
            //entity.sequelize.connectionManager.close();
          resolve(result);
      }).error(function (err) {
          console.log("Error:" + err);
          reject(err);
      });
    });
  }

  const getEntity = (entity,parmas) => {
    var id = parmas.id
    return new Promise(
      (resolve, reject) => {
        entity.findAll({where: {
            id: id
        }}).then(function(result) {
            //entity.sequelize.connectionManager.close();
          resolve(result);
      }).error(function (err) {
          console.log("Error:" + err);
          reject(err);
      });
    });
  }

  const addEntity = (entity, obj) => {
    return new Promise(
      (resolve, reject) => {
        entity
        .build(obj).save()
        .then(function(anotherTask) {
          resolve("POST OK"); 
        }).catch(function(error) {
          reject(error);
        })
      });
  }
  
  const updateEntity = (entity, obj) => {
    var ident = obj.id;
    delete obj["id"];
    console.log("payload on update", obj)
    return new Promise(
      (resolve, reject) => {
        entity
        .update(obj, { where: {id: ident} })
        .then(function(anotherTask) {
          resolve("PATCH OK"); 
        }).catch(function(error) {
          reject(error);
        })
      });
  }

  //"delete"
  const deleteEntity = (entity, obj)  => {
    //var ident = obj.id;
    console.log("payload on delete", obj)
    return new Promise(
      (resolve, reject) => {
        entity
        .update({estado: 0}, { where: obj })
        .then(function(anotherTask) {
          resolve("DELETE OK"); 
        }).catch(function(error) {
          reject(error);
        })
      });
    }

    ///Funciones complejas
    const getParentAndChilds = (parent, child) => {
        return new Promise(
          (resolve, reject) => {
            //db.productos.belongsTo(db.usuarios, {foreignKey: 'id'})
            parent.findAll({
            //{where: {id:1}},
              include: [
                {
                  model: child,
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
  //delete--ahora si de adeveras
  const destroyEntity = (entity, obj)  => {
  //var ident = obj.id;
  console.log("payload on delete", obj)
  return new Promise(
    (resolve, reject) => {
      entity
      .destroy({ where: obj })
      .then(function(anotherTask) {
        resolve("DESTROY OK"); 
      }).catch(function(error) {
        reject(error);
      })
    });
  }

exports.getListEntity = getListEntity
exports.getEntity = getEntity
exports.addEntity = addEntity
exports.updateEntity = updateEntity
exports.deleteEntity = deleteEntity
exports.destroyEntity = destroyEntity
exports.getParentAndChilds = getParentAndChilds
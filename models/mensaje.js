'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Mensaje = sequelize.define('mensaje', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          texto:DataTypes.STRING,
          leido:DataTypes.STRING,
          fechaCreacion:DataTypes.DATE,
          estado:DataTypes.STRING,
          bandeja_id:DataTypes.INTEGER,
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return Mensaje;
};
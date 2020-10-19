'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Bandeja = sequelize.define('bandeja', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          mensajeNuevo:DataTypes.STRING,
          fechaCreacion:DataTypes.DATE,
          estado:DataTypes.STRING,
          usuario_id:DataTypes.INTEGER,
          usuario_id_emisor:DataTypes.INTEGER,
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return Bandeja;
};
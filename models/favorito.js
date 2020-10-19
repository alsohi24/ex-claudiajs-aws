'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Favorito = sequelize.define('favorito', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          usuario_id:DataTypes.INTEGER,
          usuario_id_emisor:DataTypes.INTEGER,
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return Favorito;
};
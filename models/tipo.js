'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Tipo = sequelize.define('tipo', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          nombre:DataTypes.STRING,
          descripcion:DataTypes.STRING,
          imagen:DataTypes.STRING,
          fechaCreacion:DataTypes.DATE,
          fechaUltimaModificacion:DataTypes.DATE,
          estado:DataTypes.STRING
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return Tipo;
};
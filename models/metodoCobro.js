'use strict'

module.exports = (sequelize, DataTypes) => {  
  const MetodoCobro = sequelize.define('metodoCobro', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          nombre:DataTypes.STRING,
          tipo: DataTypes.STRING,
          numero: DataTypes.STRING,
          numeroCCI: DataTypes.STRING,
          entidad: DataTypes.STRING,
          moneda: DataTypes.STRING,
          fechaCreacion:DataTypes.DATE,
          fechaUltimaModificacion:DataTypes.DATE,
          estado:DataTypes.STRING,
          usuario_id:DataTypes.INTEGER
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return MetodoCobro;
};
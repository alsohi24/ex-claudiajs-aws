'use strict'

module.exports = (sequelize, DataTypes) => {  
  const MetodoPago = sequelize.define('metodoPago', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          nombre:DataTypes.STRING,
          tipo: DataTypes.STRING,
          marca: DataTypes.STRING,
          tokenPasarela:DataTypes.STRING,
          entidad:DataTypes.STRING,
          moneda:DataTypes.STRING,
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

  return MetodoPago;
};
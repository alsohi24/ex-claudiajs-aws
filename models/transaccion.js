'use strict'

const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {  
  const Transaccion = sequelize.define('transaccion', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          usuario_id_vendedor:DataTypes.INTEGER,
          usuario_id_comprador:DataTypes.INTEGER,
          metodoCobro_id:DataTypes.INTEGER,
          metodoPago_id:DataTypes.INTEGER,
          producto_id:DataTypes.INTEGER,
          cantidad:DataTypes.INTEGER,
          precioUnitario:DataTypes.DECIMAL,
          precioTotal:DataTypes.DECIMAL,
          estadoTransaccion:DataTypes.STRING,
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

  return Transaccion;
};


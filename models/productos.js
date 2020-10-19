'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Producto = sequelize.define('producto', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          nombre: DataTypes.STRING,
          nombreCorto: DataTypes.STRING,
          descripcion: DataTypes.STRING,
          imagen1: DataTypes.STRING,
          imagen2: DataTypes.STRING,
          imagen3: DataTypes.STRING,
          politicas: DataTypes.STRING,
          moneda: DataTypes.STRING,
          precio: DataTypes.DECIMAL,
          
          hash: DataTypes.STRING,
          fechaCreacion:DataTypes.DATE,
          fechaUltimaModificacion:DataTypes.DATE,
          estado: DataTypes.STRING,
          usuario_id: DataTypes.INTEGER,
          tipo_id: DataTypes.INTEGER
          },
        {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
      }
      );

  return Producto;
};
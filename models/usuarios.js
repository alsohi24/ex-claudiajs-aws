'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Usuario = sequelize.define('usuario', {
          id:{
            type:DataTypes.INTEGER,
            primaryKey: true
          },
          userLogin:DataTypes.STRING,
          nombres:DataTypes.STRING,
          apellidos:DataTypes.STRING,
          fechaNacimiento:DataTypes.DATE,
          tipoDocumento:DataTypes.STRING,
          numeroDocumento:DataTypes.STRING,
          numeroMovil:DataTypes.STRING,
          hash:DataTypes.STRING,
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

  return Usuario;
};
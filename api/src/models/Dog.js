const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    minHeight:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    maxHeight:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    minWeight:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    maxWeight:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    minLife:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    maxLife:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    temperament:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    },
  });
};

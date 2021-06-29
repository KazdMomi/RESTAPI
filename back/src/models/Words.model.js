module.exports = (sequelize, DataTypes) => {
    const Words = sequelize.define("Words", {
    id_words:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Words',
    freezeTableName: true,
    timestamps: false  
  });
  
    return Words;
};
import sequelize, { DataTypes } from "sequelize";

const recipe = (sequelize: sequelize.Sequelize) => {
  const Recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,50] as [number,number],
      }
    },
    author: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,32] as [number,number],
      }
    },
    time: {
      type: DataTypes.INTEGER,
    },
    servings: {
      type: DataTypes.INTEGER,
    },
    numIngredients: {
      type: DataTypes.INTEGER,
    },
    ingredients: {
      type: DataTypes.STRING,
    },
    numSteps: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.STRING,
    },
  });

  return Recipe;
};

export default recipe;
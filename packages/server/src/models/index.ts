import { Sequelize } from 'sequelize';

console.log(process.env.DATABASE!)
const sequelize = new Sequelize(
  process.env.DATABASE!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    dialect: 'postgres',
  },
);
const models = {
  Recipe: sequelize.import('./recipe'),
};

Object.keys(models).forEach(model => {
  if('associate' in models[model]) {
    models[model].associate(models);
  }
});

export { sequelize };
export default models;

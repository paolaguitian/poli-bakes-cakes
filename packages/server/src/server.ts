
require('dotenv').config()
import express from 'express';
import { sequelize } from './models';


const app = express();
const port = 3000;
// #8 Set the port that the Express application will listen to
sequelize.sync().then(() => {
  app.listen({ port }, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
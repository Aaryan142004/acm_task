const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());
const todoRouter = require('./src/routes/todoRoutes');




app.use('/todos',todoRouter);





module.exports = app
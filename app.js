const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());
const todoRouter = require('./src/routes/todoRoutes');
const userRouter = require('./src/routes/userRoutes');






app.use('/todos',todoRouter);
app.use('/users',userRouter);




module.exports = app
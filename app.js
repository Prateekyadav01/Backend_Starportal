import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();




app.use(express.json());
app.use(cors());
app.use(cookieParser());


import auth from './routes/auth.routes.js'


app.use('/api/v1/auth', auth);

export{app};
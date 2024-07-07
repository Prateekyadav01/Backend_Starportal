import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();




app.use(express.json());
app.use(cors());
app.use(cookieParser());


import auth from './routes/auth.routes.js'
import notification from './routes/notification.route.js'

app.use('/api', auth);
app.use('/api',notification);

export{app};

import express from 'express';
//import path from 'path';
//import favicon from 'serve-favicon';
import logger from 'morgan';
//import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import setRoutes from './routes';


const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setRoutes(app);

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found this api!');
})


export default app;

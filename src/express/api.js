import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

import healthCheck from './healthCheck';
import notImplemented from './notImplemented';
import invalidJSON from './invalidJSON';
import routes from '../routes';


export default function api(port) {
  return new Promise((resolve, reject) => {
    function callback(err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    }
    const server = express()

    server.use(bodyParser.json());
    server.use(cors());
    server.use(morgan('combined'));
    server.use('/healthz', healthCheck);
    server.use('/api', routes);
    server.all('*', notImplemented);
    server.use(invalidJSON);

    server.listen(port, callback);
  });
}

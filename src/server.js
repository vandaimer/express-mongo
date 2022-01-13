import api from './express/api';
import mongoConnection from './database/mongodb';

const port = process.env.PORT || 3000;

mongoConnection.open()
  .then(() => api(port))
  .then(() => {
    // eslint-disable-next-line no-console
    console.info(`Server running. See http://localhost:${port}`);
  })
  .catch(err =>
    // eslint-disable-next-line no-console
    console.error('Unable to start the api:', err),
  );

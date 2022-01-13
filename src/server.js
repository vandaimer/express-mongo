import api from './express/api';
import { connectDB } from './database';

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || '';

connectDB(mongoURI)
  .then(client => {
    client.close();
    return api(port);
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.info(`Server running. See http://localhost:${port}`);
  })
  .catch(err =>
    // eslint-disable-next-line no-console
    console.error('Unable to start the api:', err),
  );

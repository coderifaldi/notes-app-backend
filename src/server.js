import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: '*',
}));
const port = process.env.PORT || 3000;
const host = 'localhost';

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
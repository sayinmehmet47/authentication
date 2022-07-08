import * as express from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const routes = require('./routes/api/routes');

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

// create and setup express app
const app = express();
app.use(express.json());

app.use(routes);

// app.post('/users', async function (req: Request, res: Response) {
//   const user = await AppDataSource.getRepository(User).create(req.body);
//   const results = await AppDataSource.getRepository(User).save(user);
//   return res.send(results);
// });

// app.put('/users/:id', async function (req: Request, res: Response) {
//   const user = await AppDataSource.getRepository(User).findOneBy({
//     id: req.params.id,
//   });
//   AppDataSource.getRepository(User).merge(user, req.body);
//   const results = await AppDataSource.getRepository(User).save(user);
//   return res.send(results);
// });

// app.delete('/users/:id', async function (req: Request, res: Response) {
//   const results = await AppDataSource.getRepository(User).delete(req.params.id);
//   return res.send(results);
// });

// start express server
app.listen(5000);

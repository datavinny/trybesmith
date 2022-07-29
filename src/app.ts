import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import error from './controllers/middlewares/error';
import ProductRoutes from './routes/products';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

app.use(ProductRoutes);
// middleware de error
app.use(error);

export default app;

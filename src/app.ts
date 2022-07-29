import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import error from './controllers/middlewares/error';
import ProductRoutes from './routes/products';
import UserRoutes from './routes/users';
import OrdersRoutes from './routes/orders';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrdersRoutes);
// middleware de error
app.use(error);

export default app;

import { Router } from 'express';
import ProductsController from '../controllers/products';
import validationProduct from '../controllers/middlewares/products';

const router = Router();

const productsController = new ProductsController();

router.post('/products/', validationProduct, productsController.create);

export default router;
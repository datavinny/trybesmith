import { Router } from 'express';
import UsersController from '../controllers/users';
import validationUser from '../controllers/middlewares/users';

const router = Router();

const usersController = new UsersController();

router.post('/users/', validationUser, usersController.create);
// router.get('/users/', usersController.getAll);

export default router;
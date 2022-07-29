import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users';
import generateToken from '../services/token';

class UsersController {
  constructor(private userService = new UserService()) { }

  // public getAll = async (_req: Request, res: Response) => {
  //   const users = await this.userService.getAll();
  //   res.status(StatusCodes.OK).json(users);
  // };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = generateToken(userCreated);
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UsersController;
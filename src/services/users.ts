import connection from '../models/connection';
import UserModel from '../models/users';
import User from '../interfaces/user';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  // public async getAll(): Promise<User[]> {
  //   const products = await this.model.getAll();
  //   return products;
  // }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;
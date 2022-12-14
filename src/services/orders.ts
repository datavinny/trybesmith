import connection from '../models/connection';
import OrderModel from '../models/orders';
import Order from '../interfaces/order';

class UserService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default UserService;
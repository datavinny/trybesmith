import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const resultOrders = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rowsOrders] = resultOrders;
    const arrOrders = rowsOrders as Order[];

    const result = await Promise.all(arrOrders.map(async (e:Order) => {
      const resultProducts = await this.connection
        .execute('SELECT id FROM Trybesmith.Products WHERE orderId = ?', [e.id]);
      const [rows] = resultProducts as RowDataPacket[];
 
      const arrIds = rows.map((element: { id: number }) => element.id);

      return { ...e, productsIds: arrIds };
    }));
    
    return result as Order[];
  }
}

export default OrderModel;
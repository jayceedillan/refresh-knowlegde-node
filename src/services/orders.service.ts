import { Order } from "../models/order.model";
import db from "../utils/db";

export const createOrder = async (order: Order): Promise<Order | null> => {
  const [result]: any = await db.execute("CALL CreateOrder(?, ?)", [
    order.customerId,
    order.totalAmount,
  ]);

  return result?.[0]?.[0] || null;
};

export const getOrderById = async (id: number): Promise<Order | null> => {
  const [result]: any = await db.execute("CALL GetOrderById(?)", [id]);
  return result?.[0]?.[0] || null;
};

export const updateOrder = async (
  id: number,
  order: Order
): Promise<Order | null> => {
  const [result]: any = await db.execute("CALL UpdateOrder(?, ?, ?)", [
    id,
    order.customerId,
    order.totalAmount,
  ]);
  return result?.[0]?.[0] || null;
};

export const deleteOrder = async (id: number): Promise<Order | null> => {
  const [result]: any = await db.execute("CALL DeleteOrder(?)", [id]);

  return result?.[0]?.[0] || null;
};

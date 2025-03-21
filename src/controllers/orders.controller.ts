import { Request, Response } from "express";
import { Order } from "../models/order.model";
import * as OrdersService from "../services/orders.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order: Order = req.body;
    const orderId = await OrdersService.createOrder(order);
    res
      .status(201)
      .json({ id: orderId, message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const order = await OrdersService.getOrderById(id);
    if (!order) {
      res.status(201).json({ message: "Order not found" });
      // return res.status(404).json({ message: "Order not found" });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get order" });
  }
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const order: Order = req.body;
    const updated = await OrdersService.updateOrder(id, order);
    if (!updated) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update order" });
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await OrdersService.deleteOrder(id);
    if (!deleted) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete order" });
  }
};

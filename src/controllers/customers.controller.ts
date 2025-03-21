import { NextFunction, Request, Response } from "express";
import { Customer } from "../models/customer.model";
import * as CustomersService from "../services/customers.service";

export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customer: Customer = req.body;
    const customerId = await CustomersService.createCustomer(customer);
    res
      .status(201)
      .json({ id: customerId, message: "Customer created successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await CustomersService.getCustomerById(id);

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer: Customer = req.body;
    const updated = await CustomersService.updateCustomer(id, customer);

    if (!updated) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    res.status(200).json({ message: "Customer updated successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await CustomersService.deleteCustomer(id);

    if (!deleted) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

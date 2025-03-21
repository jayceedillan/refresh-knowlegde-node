import { Customer } from "../models/customer.model";
import db from "../utils/db";

export const createCustomer = async (
  customer: Customer
): Promise<Customer | null> => {
  const [result]: any = await db.execute("CALL CreateCustomer(?,?)", [
    customer.name,
    customer.email,
  ]);

  return result?.[0]?.[0] || null;
};

export const getCustomerById = async (id: number): Promise<Customer | null> => {
  const [result]: any = await db.execute("CALL GetCustomerById(?)", [id]);

  return result?.[0]?.[0] || null;
};

export const updateCustomer = async (
  id: number,
  customer: Customer
): Promise<Customer | null> => {
  const [result]: any = await db.execute("CALL UpdateCustomer(?, ?, ?)", [
    id,
    customer.name,
    customer.email,
  ]);

  return result?.[0]?.[0] || null;
};

export const deleteCustomer = async (id: number): Promise<Customer | null> => {
  const [result]: any = await db.execute("CALL DeleteCustomer(?)", [id]);

  return result?.[0]?.[0] || null;
};

import { Product } from "../models/product.model";
import db from "../utils/db";

export const createProduct = async (
  product: Product
): Promise<Product | null> => {
  const [result]: any = await db.execute("CALL CreateProduct(?, ?, ?)", [
    product.name,
    product.description,
    product.price,
  ]);
  return result?.[0]?.[0] || null;
};

export const getProductById = async (id: number): Promise<Product | null> => {
  const [result]: any = await db.execute("CALL GetProductById(?)", [id]);
  return result?.[0]?.[0] || null;
};

export const updateProduct = async (
  id: number,
  product: Product
): Promise<Product | null> => {
  const [result]: any = await db.execute("CALL UpdateProduct(?, ?, ?, ?)", [
    id,
    product.name,
    product.description,
    product.price,
  ]);
  return result?.[0]?.[0] || null;
};

export const deleteProduct = async (id: number): Promise<Product | null> => {
  const [result]: any = await db.execute("CALL DeleteProduct(?)", [id]);
  return result?.[0]?.[0] || null;
};

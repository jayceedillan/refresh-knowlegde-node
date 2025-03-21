import { Request, Response } from "express";
import { Product } from "../models/product.model";
import * as ProductsService from "../services/products.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;
    const productId = await ProductsService.createProduct(product);
    res
      .status(201)
      .json({ id: productId, message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await ProductsService.getProductById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get product" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const product: Product = req.body;
    const updated = await ProductsService.updateProduct(id, product);
    if (!updated) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await ProductsService.deleteProduct(id);
    if (!deleted) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};

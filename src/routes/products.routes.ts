import express from "express";
import * as ProductsController from "../controllers/products.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize(["admin"]),
  ProductsController.createProduct
);
router.get(
  "/:id",
  authenticate,
  authorize(["admin"]),
  ProductsController.getProductById
);
router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  ProductsController.updateProduct
);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  ProductsController.deleteProduct
);

export default router;

import express from "express";
import * as OrdersController from "../controllers/orders.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", authenticate, OrdersController.createOrder);
router.get("/:id", authenticate, OrdersController.getOrderById);
router.put("/:id", authenticate, OrdersController.updateOrder);
router.delete("/:id", authenticate, OrdersController.deleteOrder);

export default router;

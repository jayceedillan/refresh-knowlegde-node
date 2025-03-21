import express from "express";
import * as CustomersController from "../controllers/customers.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize(["admin"]),
  CustomersController.createCustomer
);

router.get(
  "/:id",
  authenticate,
  authorize(["admin"]),
  CustomersController.getCustomerById
);

router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  CustomersController.updateCustomer
);

router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  CustomersController.deleteCustomer
);

export default router;

import cors from "cors";
import express from "express";
import AuthRoutes from "./routes/auth.routes";
import CustomersRoutes from "./routes/customers.routes";
import OrdersRoutes from "./routes/orders.routes";
import ProductsRoutes from "./routes/products.routes";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", AuthRoutes);
app.use("/orders", OrdersRoutes);
app.use("/customers", CustomersRoutes);
app.use("/products", ProductsRoutes);

export default app;

import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import AuthRoutes from "./routes/auth.routes";
import CustomersRoutes from "./routes/customers.routes";
import OrdersRoutes from "./routes/orders.routes";
import ProductsRoutes from "./routes/products.routes";
import swaggerDocument from "./swagger-output.json";
const app = express();

// Use Swagger Middleware

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/orders", OrdersRoutes);
app.use("/api/customers", CustomersRoutes);
app.use("/api/products", ProductsRoutes);

export default app;

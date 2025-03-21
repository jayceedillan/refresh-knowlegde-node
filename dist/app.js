"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const customers_routes_1 = __importDefault(require("./routes/customers.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/orders", orders_routes_1.default);
app.use("/customers", customers_routes_1.default);
app.use("/products", products_routes_1.default);
exports.default = app;

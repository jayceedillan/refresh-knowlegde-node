"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.createOrder = void 0;
const db_1 = __importDefault(require("../utils/db"));
const createOrder = (order) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL CreateOrder(?, ?)", [order.customerId, order.totalAmount], (err, result) => {
            if (err) {
                return reject(err);
            }
            const insertId = result[0][0]["LAST_INSERT_ID()"];
            resolve(insertId);
        });
    });
};
exports.createOrder = createOrder;
const getOrderById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL GetOrderById(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const orders = result[0];
            if (orders.length === 0) {
                return resolve(undefined);
            }
            resolve(orders[0]);
        });
    });
};
exports.getOrderById = getOrderById;
const updateOrder = (id, order) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL UpdateOrder(?, ?, ?)", [id, order.customerId, order.totalAmount], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.updateOrder = updateOrder;
const deleteOrder = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL DeleteOrder(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.deleteOrder = deleteOrder;

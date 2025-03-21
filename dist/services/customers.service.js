"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.createCustomer = void 0;
const db_1 = __importDefault(require("../utils/db"));
const createCustomer = (customer) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL CreateCustomer(?, ?)", [customer.name, customer.email], (err, result) => {
            if (err) {
                return reject(err);
            }
            const insertId = result[0][0]["LAST_INSERT_ID()"];
            resolve(insertId);
        });
    });
};
exports.createCustomer = createCustomer;
const getCustomerById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL GetCustomerById(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const customers = result[0];
            if (customers.length === 0) {
                return resolve(undefined);
            }
            resolve(customers[0]);
        });
    });
};
exports.getCustomerById = getCustomerById;
const updateCustomer = (id, customer) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL UpdateCustomer(?, ?, ?)", [id, customer.name, customer.email], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL DeleteCustomer(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.deleteCustomer = deleteCustomer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.createProduct = void 0;
const db_1 = __importDefault(require("../utils/db"));
const createProduct = (product) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL CreateProduct(?, ?, ?)", [product.name, product.description, product.price], (err, result) => {
            if (err) {
                return reject(err);
            }
            const insertId = result[0][0]["LAST_INSERT_ID()"];
            resolve(insertId);
        });
    });
};
exports.createProduct = createProduct;
const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL GetProductById(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const products = result[0];
            if (products.length === 0) {
                return resolve(undefined);
            }
            resolve(products[0]);
        });
    });
};
exports.getProductById = getProductById;
const updateProduct = (id, product) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL UpdateProduct(?, ?, ?, ?)", [id, product.name, product.description, product.price], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.updateProduct = updateProduct;
const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("CALL DeleteProduct(?)", [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const affectedRows = result[0][0]["ROW_COUNT()"];
            resolve(affectedRows > 0);
        });
    });
};
exports.deleteProduct = deleteProduct;

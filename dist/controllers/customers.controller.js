"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.createCustomer = void 0;
const CustomersService = __importStar(require("../services/customers.service"));
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = req.body;
        const customerId = yield CustomersService.createCustomer(customer);
        res
            .status(201)
            .json({ id: customerId, message: "Customer created successfully" });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.createCustomer = createCustomer;
const getCustomerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const customer = yield CustomersService.getCustomerById(id);
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.status(200).json(customer);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.getCustomerById = getCustomerById;
const updateCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const customer = req.body;
        const updated = yield CustomersService.updateCustomer(id, customer);
        if (!updated) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.status(200).json({ message: "Customer updated successfully" });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const deleted = yield CustomersService.deleteCustomer(id);
        if (!deleted) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.status(200).json({ message: "Customer deleted successfully" });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.deleteCustomer = deleteCustomer;

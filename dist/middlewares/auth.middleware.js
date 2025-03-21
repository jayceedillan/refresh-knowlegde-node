"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
// src/middlewares/auth.middleware.ts
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticate = authenticate;
// export const authenticate: RequestHandler = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided" });
//   }
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
//     if (err) {
//       console.error("Invalid token:", err);
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     if (decoded) {
//       req.user = decoded as UserPayload;
//       next();
//     } else {
//       console.error("Decoded is null");
//       return res.status(401).json({ message: "Invalid token" });
//     }
//   });
// };

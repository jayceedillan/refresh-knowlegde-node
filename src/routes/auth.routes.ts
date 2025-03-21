import express from "express";
import { getLogin } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", getLogin);

export default router;

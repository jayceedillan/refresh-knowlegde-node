import express from "express";
import { getLogin } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", getLogin); // Calls the controller

export default router;

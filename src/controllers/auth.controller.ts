import { NextFunction, Request, Response } from "express";
import * as usersService from "../services/users.service";
import { loginSchema } from "../validations/auth.validation";

export const getLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = loginSchema.validate(req.body);
    console.log("error", "xxxxx");
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: "Username and password are required" });
      return;
    }

    const user = await usersService.getLogin(username, password);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error in getLogin:", error);
    next(error);
  }
};

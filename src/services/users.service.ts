import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import db from "../utils/db";

export const getLogin = async (username: string, password: string) => {
  const [result]: any = await db.execute("CALL GetLogin(?)", [username]);

  const user: User | undefined = result?.[0]?.[0];

  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { success: false, message: "Invalid credentials" };
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return { success: true, token };
};

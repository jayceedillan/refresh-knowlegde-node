import { NextFunction, Request, Response } from "express";

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user);
    if (req.user && roles.includes(req.user.role)) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};

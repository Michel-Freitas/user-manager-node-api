import { NextFunction, Request, Response } from "express";
import { BaseError } from "src/shared/dto/BaseError";

export class ErrorMiddleware {
  static handleError() {
    return (
      err: BaseError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      res.status(err.status || 500).json({
        error: {
          status: err.status || 500,
          message: err.message || "Ocorreu um erro no servidor.",
        },
      });
    };
  }
}

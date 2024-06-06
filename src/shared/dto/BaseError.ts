import { EHttpStatus } from "../enums/EHttpStatus";

export class BaseError extends Error {
  private readonly statusCode: EHttpStatus;

  constructor(message: string, statusCode?: EHttpStatus) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || EHttpStatus.INTERNAL_SERVER_ERROR;
  }

  get status() {
    return this.statusCode;
  }
}

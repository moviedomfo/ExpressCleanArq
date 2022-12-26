import HttpException from "./http-exception";
import { Request, Response, NextFunction } from "express";

// you must mount the errorHandler middleware function after you have mounted all the controller functions of your application.
export const errorHandler = ( error: HttpException,  request: Request,  response: Response, next: NextFunction) => {
  
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};
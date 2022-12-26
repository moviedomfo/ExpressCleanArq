
import { Request, Response, NextFunction } from "express";

// you must mount the errorHandler middleware function after you have mounted all the controller functions of your application.
export const logsHandler = ( request: Request,  response: Response, next: NextFunction) => {
  console.log('---------------------------------');
  console.log('Esto paso por el middleware Logs');
  console.log(request.body);
  console.log('---------------------------------');
  next();
};

export const logsHandlerFakes = ( request: Request,  response: Response, next: NextFunction) => {
  console.log('---------------------------------');
  console.log('Esto solo es atrapa fakes ');
  console.log(request.body);
  console.log('---------------------------------');
  next();
};
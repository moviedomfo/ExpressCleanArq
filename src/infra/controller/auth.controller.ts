  import {Request,Response} from "express";
import * as AuthService from "../../application/auth.service";

export default class AuthController {


  public Authenticate = async (req:Request, res:Response) => {
   try {
      const authData = await AuthService.authenticate2();

      res.status(201).json(authData);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}



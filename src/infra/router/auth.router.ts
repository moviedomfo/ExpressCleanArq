import { Request, Response } from "express";
import { Router } from "express";
import container from "../DependenciInjection";
import AuthController from "./../controller/auth.controller";

const router = Router();
const authCtrl: AuthController = container.get("AuthController");

// Authenticate with Auth0

router.post("/", async (req: Request, res: Response) =>
  authCtrl.Authenticate(req, res)
);
export { router as authRouter };
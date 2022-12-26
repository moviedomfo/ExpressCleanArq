import { Request, Response } from "express";
import  { Router } from "express";
import container from "../DependenciInjection";
import MurtationController from "./../controller/mutation.controller";

 const router = Router();
const murtationCtrl: MurtationController = container.get("MurtationController");

router.post("/mutation", async (req: Request, res: Response) =>
  murtationCtrl.Verify(req, res)
);
export { router as adnRouter };
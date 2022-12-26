import { Request, Response, Router } from "express";
import InfoController from "./../controller/info.controller";
import container from "../DependenciInjection";

 const router = Router();
const infoCtrl: InfoController = container.get("InfoController");

router.get("/", async (req: Request, res: Response) =>
  infoCtrl.GetInfo(req, res)
);
export { router as infoRouter };
// The logic of the controllers is compact as they delegate the bulk of their operations to the
// functions of the ItemService module. I
import { Request, Response, Router } from "express";

import * as fakeService from "../../application/users.service";
import { getUserBodyDto, User } from "../../domain/models/fake.model";
import container from "../DependenciInjection";
import UsersController from "./../controller/users.controller";

const router = Router();
const userCtrl: UsersController = container.get("UsersController");

router.get("/gertUsers", async (req: Request, res: Response) =>
  userCtrl.GetUsers(req, res)
);
export { router as usersRouter };

import { Request, Response, Router } from "express";

import { checkJwt } from "../../common/authz.middleware";
import container from "../DependenciInjection";
import ItemsController from "./../controller/items.controller";

const router = Router();
// mount the Auth middleware to Protected API endpoints for all APIs
//itemsRouter.use(checkJwt);

const itemsCtrl: ItemsController = container.get("ItemsController");

router.get("/", (req: Request, res: Response) => itemsCtrl.FindAll(req, res));

// GET items/:id

router.get("/:id", async (req: Request, res: Response) =>
  itemsCtrl.Find(req, res)
);

// POST items
router.post("/", checkJwt, async (req: Request, res: Response) =>
  itemsCtrl.Create(req, res)
);

// PUT items/:id

// reuter.put("/:id", checkJwt, async (req: Request, res: Response) => {
//   const id: number = parseInt(req.params.id, 10);

//   try {
//     const itemUpdate: Item = req.body;

//     const existingItem: Item = await itemsCtrl.find(id);

//     if (existingItem) {
//       const updatedItem = await itemsCtrl.update(id, itemUpdate);
//       return res.status(200).json(updatedItem);
//     }

//     const newItem = await itemsCtrl.create(itemUpdate);

//     res.status(201).json(newItem);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// // DELETE items/:id

// reuter.delete("/:id", checkJwt, async (req: Request, res: Response) => {
//   try {
//     const id: number = parseInt(req.params.id, 10);
//     await itemsCtrl.remove(id);

//     res.sendStatus(204);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
export { router as itemsRouter };

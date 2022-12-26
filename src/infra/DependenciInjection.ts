import { InfoService } from "../application/info.service";
import { ContainerBuilder } from "node-dependency-injection";
import MutationRepository from "./repos/Mutation.repo";
import InfoController from "./controller/info.controller";
import MurtationController from "./controller/mutation.controller";
import UsersService from "../application/users.service";
import ItemsController from "./controller/items.controller";
import ItemsService from "../application/items.service";
import AuthController from "./controller/auth.controller";
import UsersController from "./controller/users.controller";

const container = new ContainerBuilder();
/** Inject all services */
container.register("MutarionVerifier", MutationRepository);
const mutarionVerifier = container.get("MutarionVerifier");

container.register("InfoService", InfoService);
const infoService = container.get("InfoService");

container.register("UsersService", UsersService);
const usersService = container.get("UsersService");

container.register("ItemsService", ItemsService);
const itemsService = container.get("ItemsService");
/** Inject all controllers */

container
  .register("ItemsController", ItemsController)
  .addArgument(itemsService);

container.register("InfoController", InfoController).addArgument(infoService);
container
  .register("MurtationController", MurtationController)
  .addArgument(mutarionVerifier);

container.register("AuthController", AuthController);
container.register("UsersController", UsersController);

export default container;

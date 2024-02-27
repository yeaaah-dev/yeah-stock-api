import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetUserController } from "../controllers/GetUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { CreateSessionController } from "../controllers/CreateSessionController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

usersRoutes.get("/:id", ensureAuthenticated, new GetUserController().handle);
usersRoutes.post("", new CreateUserController().handle);
usersRoutes.put("/:id", ensureAuthenticated, new UpdateUserController().handle);
usersRoutes.delete("/:id", ensureAuthenticated,  new DeleteUserController().handle);

usersRoutes.post("/sessions", new CreateSessionController().handle);

export { usersRoutes }
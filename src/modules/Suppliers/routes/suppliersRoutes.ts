import { Router } from "express";
import { CreateSuppliersController } from "../controllers/CreateSuppliersController";
import { DeleteSuppliersController } from "../controllers/DeleteSuppliersController";
import { GetSuppliersController } from "../controllers/GetSuppliersController";

const suppliersRoutes = Router();

suppliersRoutes.post("/", new CreateSuppliersController().handle);
suppliersRoutes.get("/", new GetSuppliersController().handle);
suppliersRoutes.delete("/:id",  new DeleteSuppliersController().handle);


export { suppliersRoutes }
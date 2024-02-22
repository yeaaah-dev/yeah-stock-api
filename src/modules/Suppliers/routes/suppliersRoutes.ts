import { Router } from "express";
import { CreateSuppliersController } from "../controllers/CreateSuppliersController";

const suppliersRoutes = Router();

suppliersRoutes.post("/", new CreateSuppliersController().handle);

export { suppliersRoutes }
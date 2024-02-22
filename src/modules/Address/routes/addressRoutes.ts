import { Router } from "express";
import { CreateAddressController } from "../controllers/CreateAddressController";

const addressRoutes = Router();

addressRoutes.post("/", new CreateAddressController().handle);

export { addressRoutes }
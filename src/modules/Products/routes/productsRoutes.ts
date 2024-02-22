import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();

productsRoutes.post("/", new ProductsController().create);
productsRoutes.put("/:id", new ProductsController().update);
productsRoutes.get("/", new ProductsController().getList);
productsRoutes.get("/:id", new ProductsController().get);

export { productsRoutes }
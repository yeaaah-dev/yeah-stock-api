import { Router } from "express";
import { productsRoutes } from "../modules/Products/routes/productsRoutes";
import { suppliersRoutes } from "../modules/Suppliers/routes/suppliersRoutes"
import { addressRoutes } from "../modules/Address/routes/addressRoutes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/suppliers", suppliersRoutes);
routes.use("/address", addressRoutes);

export { routes }
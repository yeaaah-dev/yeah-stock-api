import { Router } from "express";
import { productsRoutes } from "../modules/Products/routes/productsRoutes";
import { suppliersRoutes } from "../modules/Suppliers/routes/suppliersRoutes"
import { addressRoutes } from "../modules/Address/routes/addressRoutes";
import { ensureAuthenticated } from "../modules/Users/middlewares/ensureAuthenticated";
import { usersRoutes } from "../modules/Users/routes/users.routes";

const routes = Router();

routes.use("/products", ensureAuthenticated, productsRoutes);
routes.use("/suppliers", ensureAuthenticated, suppliersRoutes);
routes.use("/address", ensureAuthenticated, addressRoutes);
routes.use("/users", usersRoutes);

export { routes }
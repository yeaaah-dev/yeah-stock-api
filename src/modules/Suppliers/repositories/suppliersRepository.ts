import AppDataSource from "../../../database/data-source";
import { Supplier } from "../entities/Supplier";

export const suppliersRepository = AppDataSource.getRepository(Supplier);
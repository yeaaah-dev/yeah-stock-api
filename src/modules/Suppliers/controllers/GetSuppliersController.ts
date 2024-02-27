import { Request, Response } from "express";
import { CreateSuppliersService } from "../services/CreateSuppliersService";
import { GetSuppliersService } from "../services/GetSuppliersService";

class GetSuppliersController {
    async handle(request: Request, response: Response ): Promise<Response> {

        const  service = new GetSuppliersService(); 

        const output =  await service.execute();
        return response.status(200).send(output);
    }
}

export  { GetSuppliersController }
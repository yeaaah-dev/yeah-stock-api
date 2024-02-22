import { Request, Response } from "express";
import { CreateSuppliersService } from "../services/CreateSuppliersService";

class CreateSuppliersController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const input = request.body;

        const  service = new CreateSuppliersService(); 

        try {
           const output =  await service.execute(input);
            return response.status(201).send(output);
        } catch (e) {
            console.log(e);
            response.status(400).send();
        }
    }
}

export  { CreateSuppliersController }
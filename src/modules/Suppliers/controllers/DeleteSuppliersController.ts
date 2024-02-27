import { Request, Response } from "express";
import { DeleteSuppliersService } from "../services/DeleteSuppliersService";

class DeleteSuppliersController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const { id } = request.params;

        const  service = new DeleteSuppliersService(); 
        await service.execute(id);

        return response.status(200).send();
    }
}

export  { DeleteSuppliersController }
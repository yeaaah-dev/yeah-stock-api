import { Request, Response } from "express";
import { CreateAddressService } from "../services/CreateAddressService";

class CreateAddressController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const input = request.body;

        const  service = new CreateAddressService(); 

        try {
            await service.execute(input);
        } catch (e) {
            console.log(e);
            response.status(400).send(e.message);
        }

        return response.status(201).send();
    }
}

export  { CreateAddressController }
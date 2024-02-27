import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";

class ProductsController {
    
    async create(request: Request, response: Response): Promise<Response> {
        const input = request.body;
        const userId = request.user.id;

        const service = new ProductsService();
        await service.create(userId, input);

        return response.status(201).send();
    }

    async get(request: Request, response: Response): Promise<Response> {
        const { id: productId } = request.params;
        const userId = request.user.id;

        const service = new ProductsService();

        try {
            const output = await service.get(userId, productId);
            return response.status(200).send(output);
        } catch(e) {
            console.log(e);
            return response.status(404).send(e.message);
        }
    }

    async getList(request: Request, response: Response): Promise<Response> {
        const { name } = request.query;  //TODO: Search por name -> enum Status active e inactive e all
        const userId = request.user.id;

        const service = new ProductsService();
        const output = await service.getList(userId, (name as string));

        return response.status(200).send(output);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const input = request.body;


        const service = new ProductsService();

        try {
            await service.update(id, input);
        } catch(e) {
            return response.status(404).send(e.message);
        }

        return response.status(200).send();
    }

    async delete(request: Request, response: Response ): Promise<Response> {
        const { id } = request.params;

        const service = new ProductsService();
        await service.delete(id);

        return response.status(200).send();
    }
}

export { ProductsController }
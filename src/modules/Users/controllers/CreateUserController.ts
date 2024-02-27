import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password }= request.body;

        const createUserService = new CreateUserService();
        const result = await createUserService.execute({name, email, password});

        return response.status(201).send(result);
    }
}

export { CreateUserController }
import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";
import { CreateSesionService } from "../services/CreateSessionService";

class CreateSessionController {
    async handle(request: Request, response: Response): Promise<Response> {
       const data = request.body;

       const createSessionService = new CreateSesionService();

        const token = await createSessionService.execute(data);
        return response.status(200).send({token});
    }
}

export { CreateSessionController }
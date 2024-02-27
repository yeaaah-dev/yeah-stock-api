import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated( 
    request: Request, 
    response: Response, 
    next: NextFunction
) {

    const authHeader =  request.headers.authorization;

    if(!authHeader) {
        return response.status(401).send('JWT token is missing'); 
    }

    const [, token] = authHeader.split(' ');

    try {

        const { sub } = verify(token, process.env.JWT_SECRET);

        request.user = {
            id: sub as string
        }
        return next();
        
    } catch {
        return response.status(401).send('Invalid JWT token'); 
    }

}
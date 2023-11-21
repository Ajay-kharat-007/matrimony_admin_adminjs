import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extend the Request interface to include the user property
interface AuthenticatedRequest extends Request {
    user?: { username: string; email: string; id: string }; // Update this based on your payload structure
}

const validateToken = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token: string | undefined;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded: JwtPayload | undefined) => {
            if (err) {
                res.status(401);
                throw new Error('User is not authorized');
            }

            if (!decoded) {
                res.status(401);
                throw new Error('Invalid token payload');
            }

            req.user = decoded.user as { username: string; email: string; id: string }; // Update this based on your payload structure
            next();
        });
    }

    if (!token) {
        res.status(401);
        throw new Error('User is not authorized or token is missing');
    }
});

export { validateToken };

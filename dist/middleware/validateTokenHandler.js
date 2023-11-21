import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error('User is not authorized');
            }
            if (!decoded) {
                res.status(401);
                throw new Error('Invalid token payload');
            }
            req.user = decoded.user;
            next();
        });
    }
    if (!token) {
        res.status(401);
        throw new Error('User is not authorized or token is missing');
    }
});
export { validateToken };

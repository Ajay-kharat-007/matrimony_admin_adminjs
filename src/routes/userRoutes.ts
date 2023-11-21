import { Router } from 'express';
import { register, login, current } from '../controllers/userController.js';
import { validateToken } from '../middleware/validateTokenHandler.js';

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", validateToken, current);

export default router;
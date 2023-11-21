import { Router } from 'express';
import { getMaster } from '../controllers/masterController.js';
const router = Router();
router.get('/', getMaster);
export default router;

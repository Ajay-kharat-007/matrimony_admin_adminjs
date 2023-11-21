import express from 'express';
import { sendMail } from '../controllers/mailController.js';
const router = express.Router();
router.route('/').get(sendMail);
export default router;

import express from 'express';
import multer from 'multer';
import path from 'path';
import { importUser } from '../controllers/csvController.js';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
router.use(express.static(path.resolve(__dirname, 'excels')));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './excels');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
router.route('/').post(upload.single('file'), importUser);
export default router;

import { Router } from 'express';
import { validateToken } from '../middleware/validateTokenHandler.js';

const router = Router();

import {
    getContact,
    createContact,
    getContactById,
    deleteContact,
    updateContact,
    getAllContact,
    uploadImage,
    getImage
} from "../controllers/userdataController.js";

router.use(validateToken)

router.route("/").get(getContact).post(createContact).put(updateContact)
router.route("/all").get(getAllContact)
router.route("/user-image").get(getImage).post(uploadImage)
router.route("/:id").get(getContactById).delete(deleteContact);

export default router;
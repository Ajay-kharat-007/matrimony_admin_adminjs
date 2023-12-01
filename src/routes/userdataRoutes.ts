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
    getImage,
    createUserContact,
    updateUserContact,
    switchUser
} from "../controllers/userdataController.js";

router.use(validateToken)

router.route("/").get(getContact).post(createContact).put(updateContact)
router.route("/useradd").post(createUserContact).put(updateUserContact)
router.route("/all").get(getAllContact)
router.route("/user-image").get(getImage).post(uploadImage)
router.route("/:id").get(getContactById).delete(deleteContact);
router.route("/switch/:id").put(switchUser)

export default router;
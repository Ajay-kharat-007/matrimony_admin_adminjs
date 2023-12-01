import { Router } from 'express';
import { validateToken } from '../middleware/validateTokenHandler.js';
const router = Router();
import { getContact, createContact, updateContact, deleteContact, getContactById, uploadImage, getImage } from "../controllers/marriedUsersController.js";
router.use(validateToken);
router.route("/").get(getContact).post(createContact).put(updateContact);
router.route("/:id").get(getContactById).delete(deleteContact);
router.route("/user-image").get(getImage).post(uploadImage);
export default router;

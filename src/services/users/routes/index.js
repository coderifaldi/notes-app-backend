import { Router } from 'express';
import { createUser, getUserById } from '../controller/user-controller.js';
import { validate } from '../../../middlewares/validate-notes.js';
import { userPayloadSchema } from '../validator/schema.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users/:id', getUserById);

export default router;
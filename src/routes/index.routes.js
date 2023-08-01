import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { userSchema, userLogin } from "../schemas/user.schema.js";
import { signUp } from "../controllers/user.controller.js";
import { validadeEmail, validateUserPass } from "../middlewares/userValidates.js";

const router = Router();

router.post('/signup', (req, res, next) => validateSchema(req, res, next, userSchema), validadeEmail, signUp)
router.post('/signin', (req, res, next) => validateSchema(req, res, next, userLogin), validateUserPass)


router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;
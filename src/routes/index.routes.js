import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { userSchema, userLogin } from "../schemas/user.schema.js";
import { signUp, signIn } from "../controllers/user.controller.js";
import { validadeEmail, validateUserPass } from "../middlewares/userValidates.js";
import generateToken from "../middlewares/generateToken.js";
import validateAuth from "../middlewares/validateAuth.js";

const router = Router();

router.post('/signup', (req, res, next) => validateSchema(req, res, next, userSchema), validadeEmail, signUp)
router.post('/signin', (req, res, next) => validateSchema(req, res, next, userLogin), validateUserPass, generateToken, signIn)

router.post('/teste', validateAuth)


router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;
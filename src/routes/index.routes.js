import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import userSchema from "../schemas/user.schema.js";
import { signUp } from "../controllers/user.controller.js";
import validadeEmail from "../middlewares/validateEmail.js";

const router = Router();

router.post('/signup', (req, res, next) => validateSchema(req, res, next, userSchema), validadeEmail, signUp);


router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;
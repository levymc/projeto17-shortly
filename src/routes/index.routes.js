import { Router } from "express";
import { getGames, postGames } from "../controllers/games.controllers.js"
import validateSchema from "../middlewares/validateSchema.js";
import itemSchema from "../schemas/item.schema.js";


const router = Router();

router.get('/games', getGames);
router.post('/games', (req, res, next) => { validateSchema(req, res, next, itemSchema) }, postGames)


router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;
import UsuarioDAO from "../database/dao/dao.users.js";
import crypt from "../middlewares/crypt.js";

const dao = new UsuarioDAO()

export async function signUp(req, res){
    try{
        req.body.password = crypt(req.body.password)
        const dataRes = await dao.create(req.body)
        console.log(`Cadastro do ${req.body.name} realizado com sucesso !`)
        res.sendStatus(201)
    }catch (err) {
        console.error("Erro signUp: ", err)
        return res.status(500).send("Erro no cadastro: ",err)
    }
}
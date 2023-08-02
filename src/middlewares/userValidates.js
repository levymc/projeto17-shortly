import UsuarioDAO from "../database/dao/dao.users.js";
import { crypt, compare } from "./crypt.js";

const dao = new UsuarioDAO()

export async function validadeEmail(req, res, next){
    const email = req.body.email
    try{
        const dataRes = await dao.readByEmail(email)
        console.log(dataRes)
        if (dataRes) return res.sendStatus(409)
        next()
    }catch (err) {
        console.error("Erro validateEmail: ", err)
        return res.status(500).send("Erro Validação de Email: ",err)
    }
}

export async function validateUserPass(req, res, next){
    const email = req.body.email

    try{
        const dataRes = await dao.readByEmail(email) // validação do email
        if (!dataRes || !compare(req.body.password, dataRes.password)) return res.send("Email ou Senha inválidos").status(401)
        res.userData = dataRes
        next()
    }catch (err) {
        console.error("Erro validateUserPass: ", err)
        return res.status(500).send("Erro Validação de Usuario e Senha: ",err)
    }
}
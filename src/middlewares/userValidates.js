import UsuarioDAO from "../database/dao/dao.users.js";
import { crypt, compare } from "./crypt.js";

const dao = new UsuarioDAO()

export async function validadeEmail(req, res, next){
    const email = req.body.email
    try{
        const dataRes = await dao.readByEmail(email)
        console.log(dataRes)
        if (dataRes) return res.send("Email inválido").status(409)
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
        if (!dataRes) return res.send("Email inválido").status(401)
        else if (!compare(req.body.password, dataRes.password)) return res.send("Senha inválido").status(401)
        res.userData = dataRes
        next()
    }catch (err) {
        console.error("Erro validateUserPass: ", err)
        return res.status(500).send("Erro Validação de Usuario e Senha: ",err)
    }
}
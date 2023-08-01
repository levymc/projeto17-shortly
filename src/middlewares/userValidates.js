import UsuarioDAO from "../database/dao/dao.users.js";
import crypt from "./crypt.js";

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
    const password = crypt(req.body.password)
    try{
        const dataRes = await dao.readByEmail(email) // validação do email
        console.log(dataRes.password != password)
        // if (!dataRes) return res.send("Email inválido").status(401)
        // else if (dataRes.password != password) return res.send("Senha inválido").status(401)
        console.log(password)

    }catch (err) {
        console.error("Erro validateUserPass: ", err)
        return res.status(500).send("Erro Validação de Usuario e Senha: ",err)
    }
}
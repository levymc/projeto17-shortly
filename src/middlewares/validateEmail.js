import UsuarioDAO from "../database/dao/dao.users.js";

const dao = new UsuarioDAO()

export default async function validadeEmail(req, res, next){
    const email = req.body.email
    try{
        const dataRes = await dao.readByEmail(email)
        console.log(dataRes)
        if (dataRes) return res.send("Email inválido").status(409)
        next()

    }catch (err) {
        console.error("Erro validateEmail: ", err)
        return res.status(500).send("Erro Validação de Email.")
    }
}
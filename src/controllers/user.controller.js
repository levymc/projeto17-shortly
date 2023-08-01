import UsuarioDAO from "../database/dao/dao.users.js";

const dao = new UsuarioDAO()

export async function signUp(req, res){
    console.log(`Cadastro do ${req.body.name} realizado com sucesso !`)
    res.sendStatus(201)
}
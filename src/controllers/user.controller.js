import UsuarioDAO from "../database/dao/dao.users.js";
import LogAccessDAO from "../database/dao/dao.logAccess.js";
import { crypt } from "../middlewares/crypt.js";
import { format, addDays } from 'date-fns';

const dao = new UsuarioDAO()
const daoLog = new LogAccessDAO()

export async function signUp(req, res){
    try{
        req.body.password = crypt(req.body.password)
        req.body.createdAt = format(new Date(), 'yyyy-MM-dd HH:MM:ss')
        const dataRes = await dao.create(req.body)
        console.log(`Cadastro do ${req.body.name} realizado com sucesso !`)
        res.sendStatus(201)
    }catch (err) {
        console.error("Erro signUp: ", err)
        return res.status(500).send("Erro no cadastro: ",err)
    }
}

export async function signIn(req, res){
    const data = {
        userId: res.userData.id,
        token: res.token,
        createdAt: format(new Date(), 'yyyy-MM-dd HH:MM:ss'),
        valid: true
    }
    try{
        console.log(data)
        const dataRes = await daoLog.create(data)
        console.log(`Login do ${res.userData.name} realizado com sucesso !`)
        console.log(res.userData.id)
        await daoLog.desativaOutrosAccess(res.userData.id) // desativando outros tokens
        res.send({token: res.token}).status(200)
    }catch (err) {
        console.error("Erro signUp: ", err)
        return res.status(500).send("Erro no cadastro: ",err)
    }
}

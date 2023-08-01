import LinkDAO from "../database/dao/dao.links.js";
import { crypt } from "../middlewares/crypt.js";
import { format, addDays } from 'date-fns';
import { nanoid } from 'nanoid'

const dao = new LinkDAO()

export async function postUrl(req, res){
    const url = req.body.url
    const shortUrl = nanoid(10)
    if (!url) return 
    try{
        const dataRes = await dao.create({
            url: url, 
            createdAt: format(new Date(), 'yyyy-MM-dd HH:MM:ss'),
            shortUrl: shortUrl
        })
        const retorno = {
            id: dataRes.id,
            shortUrl: dataRes.shortUrl
        }
        res.send(retorno).status(201)
    }catch (err) {
        console.error("Erro postURL: ", err)
        return res.status(500).send("Erro no postURL: ",err)
    }
}
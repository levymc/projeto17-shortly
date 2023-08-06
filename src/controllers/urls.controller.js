import LinkDAO from "../database/dao/dao.links.js";
import { crypt } from "../middlewares/crypt.js";
import { format, addDays } from 'date-fns';
import { nanoid } from 'nanoid'

const dao = new LinkDAO()

export async function postUrl(req, res){
    const url = req.body.url
    const shortUrl = nanoid()
    if (!url) return 
    try{
        const dataRes = await dao.create({
            url: url, 
            createdAt: format(new Date(), 'yyyy-MM-dd HH:MM:ss'),
            shortUrl: shortUrl,
            createdBy: res.user.id
        })
        console.log(res.user.id)

        const retorno = {
            id: dataRes.id,
            shortUrl: dataRes.shortUrl
        }
        res.status(201).send(retorno)
    }catch (err) {
        console.error("Erro postURL: ", err)
        return res.status(500).send("Erro no postURL: ",err)
    }
}


export async function getLinks(req,res){
    try{
        const links = dao.read()
    }catch (err) {
        console.error("Erro postURL: ", err)
        return res.status(500).send("Erro no postURL: ",err)
    }
}

export const getUrlById = async (req, res) => {
    const id = parseInt(req.params.id)
    try{
        const urlById = await dao.readById(id)
        console.log(urlById)
        if (!urlById) return res.sendStatus(404)
        const response = {
            id: id, 
            shortUrl: urlById.shortUrl,
            url: urlById.url
        }
        res.status(200).send(response)
    }catch (err) {
        console.error("Erro getUrlById: ", err)
        return res.status(500).send("Erro no getUrlById: ",err)
    }
}

export const openShort = async(req, res) => {
    const shortUrl = req.params.shortUrl
    console.log(shortUrl)
    try{
        const resDB = await dao.readByshortUrl(shortUrl)
        if (!resDB) return res.sendStatus(404)
        addView(resDB)
        console.log("Redirecionando para URL: ", resDB.url)
        res.redirect(resDB.url)
    }catch (err) {
        console.error("Erro getUrlById: ", err)
        return res.status(500).send("Erro no getUrlById: ",err)
    }
}


const addView = async (resDB, res) => {
    const data = {
        views: resDB.views + 1,
    }
    try{
        const resUpdate = await dao.update(resDB.id, data)
    }catch (err) {
        console.error("Erro addView: ", err)
        return res.status(500).send("Erro no addView: ",err)
    }
    
}
import conectDB from "../database.connection.js";

class Link {
    constructor(url, shortUrl, views, createdAt, createdBy) {
        this.url = url
        this.shortUrl = shortUrl
        this.views = views
        this.createdAt = createdAt
        this.createdBy = createdBy
    }
}

export default class LinkDAO {
    constructor() {
        this.pool = null;
        this.links = [];
    }
        
    async connect() {
        this.pool = await conectDB();
        console.log("Conexão realizada!!!");
    }
    
    async disconnect() {
        if (this.pool) {
            await this.pool.end();
            console.log("Conexão encerrada...");
        }
    }
    
    async create(linkData) {
        await this.connect();
        const novoLink = new Link(
            linkData.url,
            linkData.shortUrl,
            linkData.views,
            linkData.createdAt,
            linkData.createdBy
        )

        const queryString = 'INSERT INTO public.links (url, "shortUrl", views, "createdAt", "createdBy") VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [novoLink.url, novoLink.shortUrl, novoLink.views, novoLink.createdAt, novoLink.createdBy];
    
        try {
            const result = await this.pool.query(queryString, values);
            const linkInserido = result.rows[0]; // O resultado da consulta contém a linha inserida com o ID
            console.log('Novo link adicionado ao banco de dados.');
            await this.disconnect()
            return linkInserido
        } catch (error) {
            console.error('Erro ao adicionar novo link ao banco de dados:', error.message)
            await this.disconnect()
            return null
        }
    }
    
    async read(limit = null, offset = null, order = null, desc = null) {
        await this.connect();

        let queryString = 'SELECT * FROM public.links ';
        if (order){
            queryString += 'ORDER BY ' + order;
            if( desc === 'true' ) queryString += ' DESC ';
        }
        queryString += 'LIMIT $1 OFFSET $2 ';
        console.log(queryString);
        const values = [limit, offset];
    
        try {
            const response = await this.pool.query(queryString, values);
            console.log('Consulta realizada com sucesso.');
            await this.disconnect();
            return response.rows || [];
        } catch (error) {
            console.error('Erro ao consultar os links no banco de dados:', error.message);
            await this.disconnect();
            return [];
        }
    }

    async readById(id) {
        await this.connect();

        const queryString = `SELECT * FROM public.links WHERE "id" = $1`;
        const value = [id];
        try {
            const response = await this.pool.query(queryString, value);
            console.log('Consulta realizada com sucesso.');
            await this.disconnect();
            return response.rows[0] || null;
        } catch (error) {
            console.error('Erro ao consultar o link no banco de dados:', error.message);
            await this.disconnect();
            return null;
        }
    }
    
    async update(id, linkData) {
        await this.connect();
    
        const linkParaAtualizar = this.links.find(link => link.id === id);
        if (!linkParaAtualizar) {
            await this.disconnect();
            return null; // Link não encontrado, retorna null
        }
    
        linkParaAtualizar.url = linkData.url || linkParaAtualizar.url;
        linkParaAtualizar.shortUrl = linkData.shortUrl || linkParaAtualizar.shortUrl;
        linkParaAtualizar.views = linkData.views || linkParaAtualizar.views;
        linkParaAtualizar.createdAt = linkData.createdAt || linkParaAtualizar.createdAt;
    
        const queryString = 'UPDATE public.links SET url = $1, "shortUrl" = $2, views = $3, "createdAt" = $4 WHERE "id" = $5';
        const values = [linkParaAtualizar.url, linkParaAtualizar.shortUrl, linkParaAtualizar.views, linkParaAtualizar.createdAt, id];
    
        try {
            await this.pool.query(queryString, values);
            console.log('Link atualizado no banco de dados.');
        } catch (error) {
            console.error('Erro ao atualizar o link no banco de dados:', error.message);
        }
    
        await this.disconnect();
        return linkParaAtualizar;
    }

    async delete(id) {
        await this.connect();
    
        const index = this.links.findIndex(link => link.id === id);
        if (index === -1) {
            await this.disconnect();
            return null;
        }

        const queryString = 'DELETE FROM public.links WHERE "id" = $1';
        const values = [id];
    
        try {
            await this.pool.query(queryString, values);
            console.log('Link excluído do banco de dados.');
        } catch (error) {
            console.error('Erro ao excluir o link do banco de dados:', error.message);
        }
    
        const linkExcluido = this.links.splice(index, 1)[0];
    
        await this.disconnect();
        return linkExcluido;
    }
}

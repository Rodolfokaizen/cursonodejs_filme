import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/filme', async (req, resp) => {
    try {
        //leitura
        let filmeObj = req.body;

        // processamento (Service)
        let id = await salvarFilmeService(filmeObj);

        //Saída
        resp.send({
            id: id
        })
        
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }


})



endpoints.get('/filme', async (req, resp) => {
    try {
        //leitura
        let nome = req.query.nome;

        // processamento (Service)
        let registros = await consultarFilmesService(nome);

        //Saída
        resp.send(registros);

    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
        
    }
})


export default endpoints;
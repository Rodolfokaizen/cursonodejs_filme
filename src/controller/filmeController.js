import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";

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

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id =req.params.id;

        let filme = await consultarFilmePorIdService(id);

        resp.send(filme);


    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})


endpoints.put('/filme/:id' , async (req, resp) =>  {
    try {
        //ler entradas
        let filmeObj = req.body;
        let id = req.params.id;

        // precessamento (Service)
        await alterarFilmeService(filmeObj, id);

        // saída response 
        resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})


endpoints.delete('/filme/:id', async (req, resp) => {
    try {
        // entrada 
        let id = req.params.id;

        // precessamento
        await deletarFilmeService(id);

        //saída
        resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})


export default endpoints;
import { salvarFilme, consultarFilmePorId, consultarFilmePorNome } from "../../repository/filmeRepository.js";
import { validarCamposObrigatoriosFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";


export default async function salvarFilmeService(filmeObj) {
    //validação de campos obrigatórios
    validarCamposObrigatoriosFilme(filmeObj);
    
    // busca filmes com o mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);
    // valida se existe filme com o mesmo nome 
    validarFilmeIgual(registros);

    // lógica de negócio
    let id = await salvarFilme(filmeObj);
    
    return id;
}
import { salvarFilme } from "../../repository/filmeRepository.js";
import { validarNovoFilme } from "../../validation/filme/filmeValidation.js";


export default async function salvarFilmeService(filmeObj) {
    //validação 
    validarNovoFilme(filmeObj);
    
    // lógica de negócio
    let id = await salvarFilme(filmeObj);
    
    return id;
}
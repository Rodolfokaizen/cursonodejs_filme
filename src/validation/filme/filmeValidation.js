

export function validarNovoFilme(filmeObj) {
    if (!filmeObj.nome)
        throw new Error('Nome do filme obrigatório.');

    if (!filmeObj.sinopse)
        throw new Error('Sinopse do filme obrigatório.');

    if (!filmeObj.avaliacao)
        throw new Error('Avaliação do filme obrigatório.');

    if (isNaN (filmeObj.avaliacao))
        throw new Error('Avaliação do filme inválida.');

    if (!filmeObj.lancamento)
        throw new Error('Lançamento do filme obrigatório.');

    if (filmeObj.disponivel == undefined)
        throw new Error('Disponível do filme obrigatório.');


}

export function validarFilmeUnico(registros) {
    if (registros.length == 0)
        throw new Error('filme não encontrado.');
}


export function validarFilmeIgual(registros) {
    if (registros.length > 0)
        throw new Error('Jã existe filme cadastrado com esse nome!.');
}
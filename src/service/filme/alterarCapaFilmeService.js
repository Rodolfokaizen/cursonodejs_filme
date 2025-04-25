import { alterarCapaFilme } from "../../repository/filmeRepository.js";

export default async function alterarFilmeService(id, caminhoImagem) {
    let linhasAfetadas = await alterarCapaFilme(id, caminhoImagem);
    if (linhasAfetadas == 0)
        throw new Error('Nenhum filme foi alterado.');

}
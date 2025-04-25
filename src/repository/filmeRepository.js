import con from './connection.js';


export async function salvarFilme(filme) {
    let comando = `
        INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
				VALUES (?,?,?,?,?)
    `
    let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = resposta[0];

    let idFilme = info.insertId;
    return idFilme;
}


export async function consultarFilmes(nome) {
    let comando = `
            SELECT    id_filme         id,
                      nm_filme         nome,
                      vl_avaliacao     avaliacao,
                      dt_lancamento    lancamento,
                      bt_disponivel    disponivel
                FROM  tb_filme
               WHERE  nm_filme like ?
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;
}
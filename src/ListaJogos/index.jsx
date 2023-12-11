import ItensJogos from '../ItensJogos';
import { useState } from 'react';
import { FilmesColecao } from '../Colecao';
import Lupa from '../assets/lupa.png';
import "./index.css";

export default function ListaJogos() {

    const [clicaFilmes, setClicaFilmes] = useState(FilmesColecao);
    const [limparStateBusca, setLimparStateBusca] = useState("")

    function botaoClique(plataforma) {
        setClicaFilmes(
            FilmesColecao.filter((filme) => filme.plataforma === plataforma)
        );
        setLimparStateBusca("");
    }

    function limparFiltros() {
        setClicaFilmes(FilmesColecao);
        setLimparStateBusca("");
    }

    function buscarFilmes(textodigitado) {
        setLimparStateBusca(textodigitado);
        setClicaFilmes(FilmesColecao.filter((filmes) =>
            filmes.nome.toLowerCase().includes(textodigitado.toLowerCase()) || filmes.plataforma.toLowerCase().includes(textodigitado.toLowerCase()))
        );
    }

    return (
        <div className="banner-content">
            <div className="main-container">
                <h2 className="title-main-container">Filmes por Streaming</h2>
                <div className="btn-container">
                    <button onClick={() => botaoClique("hbo max")}>HBO Max</button>
                    <button onClick={() => botaoClique("disney plus")}>Disney+</button>
                    <button onClick={() => botaoClique("netflix")}>Netflix</button>
                    <button onClick={limparFiltros}>Limpar Filtros</button>
                </div>
                <div className="input-busca">
                    <img src={Lupa} />
                    <input
                        type="text"
                        value={limparStateBusca}
                        placeholder="Digite o filme ou streaming que deseja encontrar"
                        onChange={(e) => buscarFilmes(e.target.value)}
                    />
                </div>
                <div className="show-filmes-container">
                    {
                        clicaFilmes.map((filme) =>
                            <ItensJogos
                                key={filme.id}
                                nome={filme.nome}
                                plataforma={filme.plataforma}
                            />
                        )}
                </div>
            </div>
        </div>
    )
}

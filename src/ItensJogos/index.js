import React from 'react';
import Netflix from '../assets/netflixlogo.png'
import HboMAx from '../assets/hbomaxlogo.jpeg'
import DisneyPlus from '../assets/disneypluslogo.webp'
import './index.css';

export default function ItensJogos({ nome, plataforma}) {
    return (
        <div className='container-card'>
            <div className='img-div'>
                <img className='img-card' src={plataforma=== "hbo max" ? HboMAx:
                          plataforma=== "disney plus" ? DisneyPlus:
                          plataforma=== "netflix" ? Netflix: null}
                    alt={nome} />
            </div>
            <div className='text-div'>
                <p>{nome}</p>
            </div>
        </div>
    )
}

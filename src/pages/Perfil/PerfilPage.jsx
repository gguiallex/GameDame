import React, { useState } from 'react'
import './PerfilPage.css'
import { Link } from 'react-router-dom';
import { HiOutlineMagnifyingGlass, HiOutlineShoppingCart, HiTrash, HiPencil } from "react-icons/hi2";

const PerfilPage = ({ contas, emailLogado }) => {

  const conta = contas.find(conta => conta.email === emailLogado);


  return (
    <div className='container'>
      <div className='NavBar'>
        <div className='image2'>
          <Link to='/home' className='botaoInvisivel' >a</Link>
        </div>
        <div className='buttonsTop'>
          <a href='#' className='lançamentos'>Lançamentos</a>
          <a href='#' className='populares'>Populares</a>
          <a href='#' className='generos'>Gêneros</a>
          <a href='#' className='promoçoes'>Promoções</a>
          <Link to='/perfil' className='conta'>Conta</Link>
          <div className='pesquisa'>
            <input className='pesq'></input>
            <button className='procurar'><HiOutlineMagnifyingGlass /></button>
          </div>
        </div>
      </div>
      <div className='corpo'>
        <div className='LadoEsquerdo'>
          <div className='ConteudoEsquerdo'>
            <h1 className='boasVindas'>Olá, {conta.username}</h1>
            <br></br><br></br><br></br>
            <p className='info'>Seu email é {conta.email}</p>
            <br></br>
            <p className='info'>Seu CPF é {conta.CPF}</p>
            <br></br><br></br>
            <button className='botoesPerfil'>
              <span>Alterar Dados</span> <HiPencil />
            </button>
            <br></br><br></br>
            <button className='botoesPerfil'>
              <span>Excluir Conta</span> <HiTrash />
            </button>
            <br></br><br></br>
            <button className='botoesPerfil' disabled>
              <span>Tela do admin</span>
            </button>
          </div>
        </div>
        <div className='LadoDireito'>
          <div className='ConteudoDireito'>
            <p className='TituloJogosAd'>Jogos Adquiridos:</p>
            <div className='jogosAd'>
              <div className='Jogo1'>
                <a className='avaliação'>100/100</a>
              </div>
              <div className='Jogo2'>
                <a className='avaliação'>95/100</a>
              </div>
              <div className='Jogo3'>
                <a className='avaliação'>75/100</a>
              </div>
              <div className='Jogo4'>
                <a className='avaliação'>adicionar avaliação</a>
              </div>
            </div>

          </div>
          <div className='Carrinho'>
            <HiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilPage
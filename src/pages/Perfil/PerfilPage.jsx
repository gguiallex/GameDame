import React from 'react'
import './PerfilPage.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const PerfilPage = () => {
  return (
    <div className='container'>
      <div className='NavBar'>
        <div className='image2'>
          <a href='/home' className='botaoInvisivel' >a</a>
        </div>
        <div className='buttonsTop'>
          <a href='#' className='lançamentos'>Lançamentos</a>
          <a href='#' className='populares'>Populares</a>
          <a href='#' className='generos'>Gêneros</a>
          <a href='#' className='promoçoes'>Promoções</a>
          <a href='/perfil' className='conta'>Conta</a>
          <div className='pesquisa'>
            <input className='pesq'></input>
            <button className='procurar'><HiOutlineMagnifyingGlass /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilPage
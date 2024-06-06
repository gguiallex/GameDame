import React, { useState } from 'react'
import './IndexPage.css'
import { HiOutlineMagnifyingGlass, HiChevronRight, HiChevronLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import PreçoEpromoção from '../../components/PreçoEpromoção';

const IndexPage = () => {

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
      <div className='Carousel'>
      <button className='PassarProLado'><HiChevronLeft/></button>
        <div className='jogosLaterais'>
          <div className='DaysGone'>
            <PreçoEpromoção promoção='-15%' preço='$169,90'/>
          </div>
          <div className='Horizon'>
            <PreçoEpromoção promoção='-25%' preço='$149,99'/>
          </div>
        </div>
        <div className='GodOfWar'>
          <div className='PreçoEpromoçãoPrincipal'>
          <PreçoEpromoção promoção='-40%' preço='$119,95'/>
          </div>
        </div>

        <div className='Paginas'>
          <div className='Pagina'></div>
          <div className='Pagina'></div>
          <div className='Pagina'></div>
          <div className='Pagina'></div>
        </div>

          <button className='PassarProLado'><HiChevronRight/></button>
        </div>
      <div className='backgroud-bottom'>
        <br></br>
        <p className='lançamentosTitulo'>Lançamentos</p>
        <br></br>
        <div className='GradeJogosNovos' >
          <div className='NovoJogo1'>
            <div className='PreçoNovosJogos'>
              <PreçoEpromoção preço='$299,00'/>
            </div>
          </div>
          <div className='NovoJogo2'>
            <div className='PreçoNovosJogos'>
              <PreçoEpromoção preço='$299,00'/>
            </div>
          </div>
          <div className='NovoJogo3'>
            <div className='PreçoNovosJogos'>
              <PreçoEpromoção preço='$299,00'/>
            </div>
          </div>
          <div className='NovoJogo4'>
            <div className='PreçoNovosJogos'>
              <PreçoEpromoção preço='$299,00'/>
            </div>
          </div>
          <div className='NovoJogo5'>
            <div className='PreçoNovosJogos'>
              <PreçoEpromoção preço='$299,00'/>
            </div>
          </div>
          <div className='Carrinho'>
            <HiOutlineShoppingCart/>
          </div>
      </div>
        </div>

    </div>
  )
}

export default IndexPage
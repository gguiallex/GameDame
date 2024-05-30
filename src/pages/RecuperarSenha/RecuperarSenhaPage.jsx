import React from 'react'
import './RecuperarSenhaPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const RecuperarSenhaPage = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='recuperar'>
            <h1 className='tituloRecuperar'>Recuperar Conta</h1>
            <input className='EmailRecuperacao' type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
          </div>

          <button className='ent'><HiArrowSmallRight /></button>

        </form>
        <a href='/register' className='criar'>Criar Conta</a>
        <a href='/' className='esqueceu'>Fazer Login</a>
      </div>

      <div className='image'/>
    </div>
  )
}

export default RecuperarSenhaPage
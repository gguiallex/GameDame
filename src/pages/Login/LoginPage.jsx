import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Envio");
    }
    
  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>

          <div className='login'>
          <h1 className='tituloLogin'>Login</h1>
            <div className='inputEmail'>
              <input type='email' placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='inputSenha'>
              <input type='password' placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
           </div>
            <button className='entrar'><HiArrowSmallRight /></button>
        </form>

        <a href='/register' className='criar'>Criar Conta</a><br></br>
        <a href='#' className='esqueceu'>Esqueceu a Senha?</a>

        <div className='imagem'/>
    </div>
  )
}

export default LoginPage
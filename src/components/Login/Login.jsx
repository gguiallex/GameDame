import React from 'react'
import './Login.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className='login'>
          <h1 className='titulo'>Login</h1>
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

        <a href='#' className='criar'>Criar Conta</a><br></br>
        <a href='#' className='esqueceu'>Esqueceu a Senha?</a>
    </div>
  )
}

export default Login
import React from 'react'
import './Login.css'
import { useState } from 'react'

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
          <h1>Login</h1>
            <div className='input'>
              <input type='email' placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='input'>
              <input type='password' placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}/>
            </div>

           </div>
            <button>→</button>
        </form>

        <div className='redirecionamento'>
          <a href='#' className='criar'>Criar Conta</a>
          <a href='#' className='esqueceu'>Esqueceu a Senha?</a>
        </div>
    </div>
  )
}

export default Login
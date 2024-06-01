import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
//import { validarEmail, validarSenha} from '../../utils/Validadores'

const LoginPage = () => {

  const [loading, setLoading] = useState();
  //const [form, setForm] = useState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      alert('funcionando')
      setLoading(false)
    } catch (err) {
      alert('algo deu errado: ' + err)
    }
    
  }

/*  const validadorInput = () => {
    return validarEmail() && validarSenha()
  } */
    
  return (
    <div className='containerr'>
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
        <a href='/forgot-password' className='esqueceu'>Esqueceu a Senha?</a>

        <div className='imagem'/>
    </div>
  )
}

export default LoginPage
import React from 'react'
import './RegisterPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const RegisterPage = () => {

  const [loading, setLoading] = useState();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [repetPassword, setRepetPassword] = useState("");

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

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='Registro'>
          <h1 className='titulo'>Registrar</h1>
          <div className='inputs'>
            <input className='nome' placeholder='Nome de Usuário'></input>
            <input className='email' type='email' placeholder='E-mail' ></input>
            <input className='CPF' placeholder='CPF' ></input>
            <input className='senha' type='password' placeholder='Senha' ></input>
            <input className='confirmarSenha' type='password' placeholder='Confirmar Senha' ></input>
          </div>
        </div>
        <button className='regist'><HiArrowSmallRight /></button>
      </form>
      <a href='/' className='esqueceu'>Fazer Login</a>
      <div className='image'/>
    </div>
  )
}

export default RegisterPage
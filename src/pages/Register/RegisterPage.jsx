import React from 'react'
import './RegisterPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

const RegisterPage = ({contas, setContas}) => {

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [repetPassword, setRepetPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    //caso houver algum campo em branco
    if(!username || !email || !CPF || !password || !repetPassword){
      alert('Preencha todos os campos.');
      return;
    }

    //caso as senhas não forem iguais
    if(password !== repetPassword){
      alert('As senhas devem ser iguais');
      return;
    }

    //para preencher corretamente o campo de CPF. Ignora os pontos e os traços para fazer a verificação.
    if(CPF.replace(/\D/g, '').length !== 11){
      alert('Preencha corretamente o seu CPF.');
      return;
    }

    //verifica se exite o username no vetor
    const usernameExiste = contas.some( conta => conta.username === username);

    //caso exista...
    if(usernameExiste){
      alert('Username existente.');
      return;
    }

    //verifica se existe cpf no vetor
    const cpfExiste = contas.some( conta => conta.CPF === CPF);

    //caso exista...
    if(cpfExiste){
      alert('CPF já cadastrado.');
      return;
    }

    //verifica se existe email no vetor
    const emailExiste = contas.some( conta => conta.email === email);

    //caso exista...
    if(emailExiste){
      alert('Email já cadastrado.');
      return;
    }

    try {
      setLoading(true)
      setTimeout(() => {
        alert('Registrado com sucesso! Você será redirecionado para a tela de login.')
        setLoading(false)
        setContas([...contas, {username, email, CPF, password}])
        navigate('/');
      }, 1000);
    } catch (err) {
      alert('algo deu errado: ' + err)
      setLoading(false);
    }
    
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='Registro'>
          <h1 className='titulo'>Registrar</h1>
          <div className='inputs'>

            <input className='nome' placeholder='Nome de Usuário' onChange={(e) => setUsername(e.target.value)}/>

            <input className='email' type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />

            <MaskedInput 
            className='CPF'
            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholder='CPF'
            onChange={(e) => setCPF(e.target.value)} />

            <input className='senha' type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />

            <input className='confirmarSenha' type='password' placeholder='Confirmar Senha' onChange={(e) => setRepetPassword(e.target.value)} />

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
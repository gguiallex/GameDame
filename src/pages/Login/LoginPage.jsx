import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const LoginPage = ({contas, setEmailLogado}) => {

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    //Caso deixar campos em branco
    if(!email || !password){
      alert('Preencha todos os campos.');
      return;
    }

    //verifica o vetor se há uma conta com as credenciais informadas
    const contaExiste = contas.find(conta => conta.email === email && conta.password === password);

    //caso não existir
    if(!contaExiste){
      alert('Usuário ou senha incorretos.')
      return;
    }

    try {
      setLoading(true)
      setTimeout(() => {
        alert('login bem sucedido');
        setLoading(false);
        //Armazena o email utilizado no login
        setEmailLogado(email);
        navigate('/home');
      }, 1000);
    } catch (err) {
      alert('algo deu errado: ' + err);
      setLoading(false);
    }
    
  }
    
  return (
    <div className='containerr'>
        <form className='form' onSubmit={handleSubmit}>

          <div className='login'>
          <h1 className='tituloLogin'>Login</h1>
            <div className='inputEmail'>
              <input type='email' placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='inputSenha'>
              <input type='password' placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
           </div>
            <button className='entrar' type='submit'>
               <HiArrowSmallRight />
              </button>
        </form>

        <a href='/register' className='criar'>Criar Conta</a><br></br>
        <a href='/forgot-password' className='esqueceu'>Esqueceu a Senha?</a>

        <div className='imagem'/>
    </div>
  )
}

export default LoginPage
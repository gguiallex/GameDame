import React from 'react'
import './RecuperarSenhaPage.css'
import { useState } from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const RecuperarSenhaPage = ({contas}) => {

  const [loading, setLoading] = useState();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    //caso não informar nenhum email
    if(!email){
      alert('Preencha o Email para o link de redefinição ser enviado.');
      return;
    }

    //verifica se existe um email no vetor
    const contaExiste = contas.some(conta => conta.email === email);

    //caso não existir
    if(!contaExiste){
      alert('não temos nenhuma conta registrada com esse email no nosso banco de dados.');
      return;
    }
    
    try{
      setLoading(true);
      setTimeout(() => {
        alert("Email enviado com sucesso!");
        setLoading(false);
        navigate("/");
      }, 1000);
    } catch(err) {
      alert('algo deu errado: ' + err);
      setLoading(false);
    }
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
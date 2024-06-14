import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css'

import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import IndexPage from './pages/Index/IndexPage'
import RecuperarSenhaPage from './pages/RecuperarSenha/RecuperarSenhaPage'
import PerfilPage from './pages/Perfil/PerfilPage'

function App() {

  //vetor de usuários registrados
  const [contas, setContas] = useState([]);
  //salvar o email da ultima pessoa logada
  const [emailLogado, setEmailLogado] = useState("");

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage contas={contas} emailLogado={emailLogado} setEmailLogado={setEmailLogado}/>}/>
          <Route path='/register' element={<RegisterPage contas={contas} setContas={setContas}/>}/>
          <Route path='/forgot-Password' element={<RecuperarSenhaPage contas={contas}/>}/>
          <Route path='/home' element={<IndexPage contas={contas} emailLogado={emailLogado}/>}/>
          <Route path='/perfil' element={<PerfilPage contas={contas} emailLogado={emailLogado}/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App

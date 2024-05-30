import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import RecuperarSenhaPage from './pages/RecuperarSenha/RecuperarSenhaPage'
import IndexPage from './pages/Index/IndexPage'

function App() {

  const [contas, setContas] = useState([
    { 
      CPF: "123.456.789-01",
      Nome: "",
      Email: "",
      Senha: "Criar capacitação",
    },
  ])

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='#' element={<RecuperarSenhaPage/>}/>
          <Route path='/home' element={<IndexPage/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App

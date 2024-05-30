import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import IndexPage from './pages/Index/IndexPage'
import RecuperarSenhaPage from './pages/RecuperarSenha/RecuperarSenhaPage'

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/forgot-Password' element={<RecuperarSenhaPage/>}/>
          <Route path='/home' element={<IndexPage/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App

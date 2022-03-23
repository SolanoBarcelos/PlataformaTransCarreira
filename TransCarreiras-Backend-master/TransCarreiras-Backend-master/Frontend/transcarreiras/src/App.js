import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './asserts/style.css'
import Home from './views/Home'
import TransCadastro from './views/trans/Index'
import TransCreate from './views/trans/TransCreate'
import EmpresaCadastro from './views/empresa/index'
import EmpresaCreate from './views/empresa/EmpresaCreate'
import CursoCadastro from './views/curso/index'
import CursoCreate from './views/curso/CursoCreate'
import EmpregoCadastro from './views/emprego/Index'
import EmpregoCreate from './views/emprego/EmpregoCreate'


import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/TransCadastro" element= {<TransCadastro/>} />
        <Route path="/Trans-Create" element={<TransCreate/>} /> 
        <Route path="/Trans-Update/:id" element={<TransCreate/>} />            
        <Route path="/EmpresaCadastro" element={<EmpresaCadastro/>} />
        <Route path="/Empresa-Create" element={<EmpresaCreate/>} />
        <Route path="/Empresa-Update/:id" element={<EmpresaCreate/>} />
        <Route path="/CursoCadastro" element={<CursoCadastro/>} />
        <Route path= "/Curso-Create" element={<CursoCreate/>} />
        <Route path="/Curso-Update/:id" element={<CursoCreate/>} />
        <Route path="/EmpregoCadastro" element={<EmpregoCadastro/>} />
        <Route path="/Emprego-Create" element={<EmpregoCreate/>} />
        <Route path="/Emprego-Update/:id" element={<EmpregoCreate/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import Inicio from "./components/Inicio.jsx";
import Beneficios from './components/Beneficios.jsx';
import TipoDeServico from './components/TipoDeServico.jsx';
import Apresentacao from './components/Apresentacao.jsx';
import Depoimentos from './components/Depoimentos.jsx';
import Formulario from './components/formulario.jsx';
import Contato from './components/Contato.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio />
      <Beneficios />
      <TipoDeServico />
      <Apresentacao />
      <Depoimentos />
      <Formulario />
      <Contato />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from "./components/Inicio.jsx";
import Beneficios from './components/Beneficios.jsx';
import TipoDeServico from './components/TipoDeServico.jsx';
import Apresentacao from './components/Apresentacao.jsx';
import Depoimentos from './components/Depoimentos.jsx';
import Formulario from './components/formulario.jsx';
import Contato from './components/Contato.jsx';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
      <Beneficios />
      <TipoDeServico />
      <Apresentacao />
      <Depoimentos />
      <Formulario />
      <Contato />
    </>
  )
}

export default App

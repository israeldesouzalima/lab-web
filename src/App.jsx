import { useEffect, useState } from 'react'
import './App.css'
import BoasVindas from './components/BoasVindas'
import Footer from './components/Footer'
import Header from './components/Header'
import NomeAutor from './components/NomeAutor'

function App() {

  const [nome, setNome] = useState('nome não informado')
  useEffect(() => {
    setNome(prompt("Qual o seu nome?? "))
  }, [])

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BoasVindas />
      <NomeAutor nome={nome} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App

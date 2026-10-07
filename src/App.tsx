import { useState } from 'react'
import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Trajetoria from './components/Trajetoria'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import ProfileModal from './components/ProfileModal'

export default function App() {
  const [perfilAberto, setPerfilAberto] = useState(false)

  return (
    <>
      <Starfield />
      <Navbar onAbrirPerfil={() => setPerfilAberto(true)} />
      <main>
        <Hero />
        <Sobre />
        <Trajetoria />
        <Skills />
        <Projetos />
      </main>
      <Contato />
      <ProfileModal aberto={perfilAberto} onFechar={() => setPerfilAberto(false)} />
    </>
  )
}

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { perfil, redes } from '../data/perfil'
import './Navbar.css'

const links = [
  { href: '#sobre', texto: 'Sobre' },
  { href: '#trajetoria', texto: 'Trajetória' },
  { href: '#skills', texto: 'Skills' },
  { href: '#projetos', texto: 'Projetos' },
]

type Props = { onAbrirPerfil: () => void }

export default function Navbar({ onAbrirPerfil }: Props) {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${rolou ? 'navbar--solida' : ''}`}>
      <button className="navbar__perfil" onClick={onAbrirPerfil} aria-label="Abrir meu perfil">
        <img src={perfil.foto} alt="" />
        <span>{perfil.nome}</span>
      </button>

      <nav aria-label="Seções">
        <ul id="menu" className={`navbar__links ${menuAberto ? 'aberto' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuAberto(false)}>{l.texto}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar__redes">
        <a href={redes.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={redes.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={redes.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>

      <button
        className={`navbar__hamburger ${menuAberto ? 'aberto' : ''}`}
        onClick={() => setMenuAberto((v) => !v)}
        aria-expanded={menuAberto}
        aria-controls="menu"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
      >
        <span /><span />
      </button>
    </header>
  )
}

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6'
import { perfil, redes } from '../data/perfil'
import './Contato.css'

export default function Contato() {
  return (
    <footer className="contato">
      <img className="contato__planeta" src="/media/planeta.png" alt="" aria-hidden="true" />
      <div className="contato__conteudo">
        <h2>Tem um projeto em mente?</h2>
        <p>Estou aberto a projetos freelance e a trocar ideia sobre desenvolvimento.</p>
        <a className="botao botao--primario contato__email" href={`mailto:${perfil.email}`}>
          <FaEnvelope aria-hidden="true" /> {perfil.email}
        </a>
        <ul className="contato__redes">
          <li><a href={redes.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a></li>
          <li><a href={redes.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a></li>
          <li><a href={redes.instagram} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /> Instagram</a></li>
        </ul>
        <p className="contato__copy">© {new Date().getFullYear()} {perfil.nome}</p>
      </div>
    </footer>
  )
}

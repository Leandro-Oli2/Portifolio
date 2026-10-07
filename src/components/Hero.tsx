import { perfil, redes } from '../data/perfil'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import './Hero.css'

export default function Hero() {
  const reduzir = usePrefersReducedMotion()

  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <video
        className="hero__video"
        src="/media/blackhole.webm"
        autoPlay={!reduzir}
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero__veu" aria-hidden="true" />

      <div className="hero__conteudo">
        <p className="hero__status">
          <span className="hero__pulso" aria-hidden="true" />
          {perfil.cargo} na {perfil.empresa}
        </p>
        <h1 id="hero-titulo" className="hero__nome">
          <span>Leandro</span>
          <span>Candido</span>
        </h1>
        <p className="hero__resumo">{perfil.resumo}</p>
        <div className="hero__acoes">
          <a className="botao botao--primario" href="#projetos">Ver projetos</a>
          <a className="botao" href={redes.linkedin} target="_blank" rel="noreferrer">Falar comigo no LinkedIn</a>
        </div>
      </div>

      <img className="hero__astronauta" src="/media/astronauta.png" alt="" aria-hidden="true" />
    </section>
  )
}

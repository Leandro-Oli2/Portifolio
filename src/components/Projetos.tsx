import type { CSSProperties } from 'react'
import { projetos, type Projeto } from '../data/perfil'
import './Projetos.css'

function Planeta({ projeto }: { projeto: Projeto }) {
  if (projeto.imagem) {
    return <img className="projeto__imagem" src={projeto.imagem} alt={`Tela do projeto ${projeto.nome}`} loading="lazy" />
  }
  const estilo = { '--c1': projeto.cores[0], '--c2': projeto.cores[1] } as CSSProperties
  return (
    <div className="projeto__planeta" style={estilo} aria-hidden="true">
      <span className="projeto__anel" />
      <span className="projeto__esfera" />
    </div>
  )
}

function Cartao({ projeto }: { projeto: Projeto }) {
  return (
    <article className="projeto">
      <Planeta projeto={projeto} />
      <div className="projeto__corpo">
        <p className="projeto__contexto">
          {projeto.contexto}
          {projeto.status && <span className="projeto__status">{projeto.status}</span>}
        </p>
        <h3>{projeto.nome}</h3>
        <p className="projeto__descricao">{projeto.descricao}</p>
        {projeto.destaques && (
          <ul className="projeto__destaques">
            {projeto.destaques.map((d) => <li key={d}>{d}</li>)}
          </ul>
        )}
        <ul className="projeto__stack" aria-label="Tecnologias">
          {projeto.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        {projeto.link && (
          <a
            className="projeto__link"
            href={projeto.link.url}
            target={projeto.link.url.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {projeto.link.texto}
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projetos() {
  const profissionais = projetos.filter((p) => p.tipo === 'profissional')
  const pessoais = projetos.filter((p) => p.tipo === 'pessoal')

  return (
    <section id="projetos" className="secao projetos">
      <h2 className="secao__titulo">Projetos</h2>

      {profissionais.length > 0 && (
        <div className="projetos__grupo">
          <h3 className="projetos__subtitulo">Profissionais</h3>
          <p className="projetos__descricao-grupo">
            Sistemas em que trabalho na Tahto e projetos entregues para clientes.
          </p>
          <div className="projetos__lista">
            {profissionais.map((p) => <Cartao key={p.nome} projeto={p} />)}
          </div>
        </div>
      )}

      {pessoais.length > 0 && (
        <div className="projetos__grupo">
          <h3 className="projetos__subtitulo">Pessoais</h3>
          <p className="projetos__descricao-grupo">
            Projetos que desenvolvi por conta própria e durante a formação.
          </p>
          <div className="projetos__pessoais">
            {pessoais.map((p) => <Cartao key={p.nome} projeto={p} />)}
          </div>
        </div>
      )}
    </section>
  )
}

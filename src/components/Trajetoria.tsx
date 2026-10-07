import { trajetoria, cursos } from '../data/perfil'
import './Trajetoria.css'

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="secao trajetoria">
      <h2 className="secao__titulo">Trajetória</h2>
      <ol className="trajetoria__lista">
        {trajetoria.map((etapa, i) => (
          <li key={etapa.titulo} className={i === trajetoria.length - 1 ? 'atual' : ''}>
            <span className="trajetoria__ponto" aria-hidden="true" />
            <p className="trajetoria__periodo">{etapa.periodo}</p>
            <h3>{etapa.titulo}</h3>
            <p className="trajetoria__lugar">{etapa.lugar}</p>
            <p className="trajetoria__descricao">{etapa.descricao}</p>
          </li>
        ))}
      </ol>

      <h3 className="trajetoria__subtitulo">Cursos e certificações</h3>
      <ul className="trajetoria__cursos">
        {cursos.map((c) => (
          <li key={c.nome}>
            <p className="trajetoria__curso-nome">{c.nome}</p>
            <p className="trajetoria__curso-info">{c.instituicao}, {c.data}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

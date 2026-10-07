import { skills } from '../data/perfil'
import './Skills.css'

// Mantém o carrossel infinito do portfólio original, agora com nome + ícone.
function Faixa({ reversa = false }: { reversa?: boolean }) {
  const itens = reversa ? [...skills].reverse() : skills
  return (
    <div className={`skills__faixa ${reversa ? 'reversa' : ''}`}>
      <ul className="skills__trilho">
        {[...itens, ...itens].map((s, i) => {
          const Icone = s.icone
          return (
            <li key={`${s.nome}-${i}`} aria-hidden={i >= itens.length}>
              <Icone aria-hidden="true" />
              <span>{s.nome}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="secao skills">
      <h2 className="secao__titulo">Skills</h2>
      <p className="secao__intro">
        As tecnologias que uso no trabalho e nos projetos. No dia a dia, principalmente .NET, NestJS, Next.js e SQL.
      </p>
      <div className="skills__faixas">
        <Faixa />
        <Faixa reversa />
      </div>
    </section>
  )
}

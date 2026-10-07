import { perfil } from '../data/perfil'
import './Sobre.css'

export default function Sobre() {
  const fatos = [
    { rotulo: 'Hoje', valor: `${perfil.cargo} na ${perfil.empresa}` },
    { rotulo: 'Formação', valor: 'ADS pela UCDB e técnico em Desenvolvimento de Sistemas pelo Senac' },
    { rotulo: 'Base', valor: `${perfil.local}, trabalhando em remoto` },
    { rotulo: 'Também', valor: 'Projetos freelance para clientes' },
    { rotulo: 'Idiomas', valor: 'Inglês técnico' },
  ]

  return (
    <section id="sobre" className="secao sobre">
      <h2 className="secao__titulo">Sobre mim</h2>
      <div className="sobre__grid">
        <div className="sobre__texto">
          {perfil.sobre.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="sobre__fatos">
          {fatos.map((f) => (
            <div key={f.rotulo}>
              <dt>{f.rotulo}</dt>
              <dd>{f.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

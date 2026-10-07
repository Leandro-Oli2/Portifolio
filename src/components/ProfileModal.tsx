import { useEffect, useRef } from 'react'
import { perfil } from '../data/perfil'
import './ProfileModal.css'

type Props = { aberto: boolean; onFechar: () => void }

// Usa <dialog> nativo: foco, Esc e acessibilidade já vêm prontos.
export default function ProfileModal({ aberto, onFechar }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (aberto && !dialog.open) dialog.showModal()
    if (!aberto && dialog.open) dialog.close()
  }, [aberto])

  return (
    <dialog
      ref={ref}
      className="perfil-modal"
      onClose={onFechar}
      onClick={(e) => { if (e.target === ref.current) onFechar() }}
      aria-labelledby="perfil-modal-nome"
    >
      <div className="perfil-modal__conteudo">
        <button className="perfil-modal__fechar" onClick={onFechar} aria-label="Fechar perfil">×</button>
        <img src={perfil.foto} alt={`Foto de ${perfil.nome}`} />
        <h2 id="perfil-modal-nome">{perfil.nome}</h2>
        <p className="perfil-modal__cargo">{perfil.cargo} na {perfil.empresa}</p>
        <dl>
          <div><dt>Formação</dt><dd>ADS (UCDB) e técnico em Desenvolvimento de Sistemas (Senac)</dd></div>
          <div><dt>Idade</dt><dd>{perfil.idade} anos</dd></div>
          <div><dt>Local</dt><dd>{perfil.local}</dd></div>
        </dl>
      </div>
    </dialog>
  )
}

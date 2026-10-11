import { useState } from 'react'
import './FormularioCotacao.css'

function FormularioCotacao({ nomeSeguro, aberto, fechar }) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [valorAtivo, setValorAtivo] = useState(false)
  const [valor, setValor] = useState(100000)
  const [erro, setErro] = useState('')

  if (!aberto) return null

  // Trata campo Nome: Apenas letras e espaços
  const handleNomeChange = (e) => {
    const value = e.target.value
    if (/^[a-zA-Aà-úÀ-Ú\s]*$/.test(value)) {
      setNome(value)
    }
  }

  // Trata campos numéricos (CPF, Telefone, CEP): Apenas números
  const handleApenasNumeros = (value, setter) => {
    const apenasNumeros = value.replace(/\D/g, '')
    setter(apenasNumeros)
  }

  const aumentarValor = () => {
    setValor(valor + 10000)
  }

  const diminuirValor = () => {
    if (valor > 10000) {
      setValor(valor - 10000)
    }
  }

  const removerValor = () => {
    setValorAtivo(false)
    setValor(100000)
  }

  const valorFormatado = valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const enviarParaWhatsapp = () => {
    // Validação de campos obrigatórios
    if (!nome.trim()) {
      setErro('Por favor, informe seu nome completo.')
      return
    }
    if (cpf.length < 11) {
      setErro('Por favor, digite um CPF válido (11 dígitos).')
      return
    }
    if (telefone.length < 10) {
      setErro('Por favor, digite um telefone válido com DDD.')
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErro('Por favor, informe um e-mail válido.')
      return
    }
    if (cep.length < 8) {
      setErro('Por favor, digite um CEP válido (8 dígitos).')
      return
    }

    setErro('') // Limpa erros se passar nas validações

    let mensagem = `Olá, meu nome é *${nome}*.\n\n` +
      `Gostaria de solicitar uma cotação para: *${nomeSeguro}*\n\n` +
      `*Meus Dados:*\n` +
      `• CPF: ${cpf}\n` +
      `• Telefone: ${telefone}\n` +
      `• E-mail: ${email}\n` +
      `• CEP: ${cep}\n`

    if (valorAtivo) {
      mensagem += `\n• *Valor desejado para cobertura:* ${valorFormatado}`
    }

    const numeroWhatsapp = '5565981169749'
    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`
    
    window.open(link, '_blank')
  }

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-cotacao" onClick={(e) => e.stopPropagation()}>
        <button className="modal-fechar" onClick={fechar}>×</button>

        <span className="eyebrow">COTAÇÃO</span>
        <h3>{nomeSeguro}</h3>
        <p className="modal-subtitulo">Preencha seus dados para finalizar no WhatsApp</p>

        {erro && <p style={{ color: '#ff4d4d', fontSize: '13px', marginBottom: '12px' }}>{erro}</p>}

        <div className="modal-campos">
          <input
            type="text"
            placeholder="Nome completo (Apenas letras)"
            value={nome}
            onChange={handleNomeChange}
          />
          <input
            type="text"
            placeholder="CPF (Apenas números)"
            maxLength={11}
            value={cpf}
            onChange={(e) => handleApenasNumeros(e.target.value, setCpf)}
          />
          <input
            type="text"
            placeholder="Telefone com DDD (Apenas números)"
            maxLength={11}
            value={telefone}
            onChange={(e) => handleApenasNumeros(e.target.value, setTelefone)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="CEP (Apenas números)"
            maxLength={8}
            value={cep}
            onChange={(e) => handleApenasNumeros(e.target.value, setCep)}
          />
        </div>

        {!valorAtivo ? (
          <button className="modal-botao-adicionar-valor" onClick={() => setValorAtivo(true)}>
            + Adicionar valor desejado
          </button>
        ) : (
          <>
            <div className="modal-valor-header">
              <p className="modal-label-valor">Valor desejado para cobertura</p>
              <button className="modal-remover-valor" onClick={removerValor}>×</button>
            </div>
            <div className="modal-valor">
              <button onClick={diminuirValor}>−</button>
              <span>{valorFormatado}</span>
              <button onClick={aumentarValor}>+</button>
            </div>
          </>
        )}

        <button className="modal-botao-enviar" onClick={enviarParaWhatsapp}>
          Finalizar no WhatsApp
        </button>
      </div>
    </div>
  )
}

export default FormularioCotacao;
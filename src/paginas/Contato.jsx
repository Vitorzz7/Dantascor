import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import logo from '../assets/logo.png'

function Contato() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    seguro: 'Seguro Auto / Veículos',
    mensagem: ''
  })

  // Número oficial da Dantascor (Cuiabá-MT)
  const TELEFONE_EXIBICAO = "(65) 981169749"
  const NUMERO_WHATSAPP = "5565981169749"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const textoMensagem = form.mensagem ? `%0AMensagem: ${encodeURIComponent(form.mensagem)}` : ''
    const mensagemZap = `Olá, me chamo *${encodeURIComponent(form.nome)}*.%0AGostaria de mais informações/cotação sobre: *${encodeURIComponent(form.seguro)}*.%0ATelefone para contato: ${encodeURIComponent(form.telefone)}${textoMensagem}`
    
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemZap}`, '_blank')
  }

  return (
    <section id="contato" className="secao secao-contato">
      <span className="eyebrow">FALE CONOSCO</span>
      <h2>Entre em <span className="destaque">Contato</span></h2>
      <p className="subtitulo-contato">
        Estamos prontos para atender você. Tire suas dúvidas ou solicite uma cotação personalizada.
      </p>

      <div className="contato-container">
        {/* LADO ESQUERDO: Cards de Contato Direto */}
        <div className="contato-info">

          {/* Card E-mail */}
          <div className="info-card">
            <div className="info-icone">
              <FaEnvelope className="icon-react" />
            </div>
            <div>
              <h4>E-mail</h4>
              <p>zenmtmt@gmail.com</p>
            </div>
          </div>

          {/* Card Telefone */}
          <div className="info-card">
            <div className="info-icone">
              <FaPhoneAlt className="icon-react" />
            </div>
            <div>
              <h4>Telefone / WhatsApp</h4>
              <p>{TELEFONE_EXIBICAO}</p>
            </div>
          </div>

          {/* Card Atendimento */}
          <div className="info-card">
            <div className="info-icone">
              <FaClock className="icon-react" />
            </div>
            <div>
              <h4>Atendimento</h4>
              <p>Das 8h às 12h e das 13h30 às 17h30</p>
            </div>
          </div>

          {/* Selo com a logo */}
          <div className="logo-selo-wrapper">
            <div className="logo-selo">
              <img src={logo} alt="Dantascorr" className="logo-selo-img" />
            </div>
          </div>

        </div>

        {/* LADO DIREITO: Formulário de Cotação */}
        <div className="contato-form-wrapper">
          <h3>Solicite uma Cotação</h3>
          <form onSubmit={handleSubmit} className="form-contato">
            <div className="campo">
              <label htmlFor="nome">Nome Completo</label>
              <input 
                type="text" 
                id="nome"
                name="nome" 
                placeholder="Seu nome" 
                value={form.nome} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">WhatsApp / Telefone</label>
              <input 
                type="tel" 
                id="telefone"
                name="telefone" 
                placeholder="(00) 00000-0000" 
                value={form.telefone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="campo">
              <label htmlFor="seguro">Interesse em qual seguro?</label>
              <select id="seguro" name="seguro" value={form.seguro} onChange={handleChange}>
                <option value="Seguro Auto / Veículos">Seguro Auto / Veículos</option>
                <option value="Seguro Moto">Seguro Moto</option>
                <option value="Seguro Caminhão / Frota">Seguro Caminhão / Frota</option>
                <option value="Seguro Residencial">Seguro Residencial</option>
                <option value="Seguro Empresarial">Seguro Empresarial</option>
                <option value="Seguro de Vida">Seguro de Vida</option>
                <option value="Plano de Saúde / Odonto">Plano de Saúde / Odonto</option>
                <option value="Seguro Viagem">Seguro Viagem</option>
                <option value="Seguro Agrícola / Equipamentos">Seguro Agrícola / Equipamentos</option>
                <option value="Seguro Responsabilidade Civil">Seguro Responsabilidade Civil</option>
                <option value="Garantia / Fiança Locatícia">Garantia / Fiança Locatícia</option>
                <option value="Quero falar sobre outro seguro">Quero falar sobre outro seguro</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem (Opcional)</label>
              <textarea 
                id="mensagem"
                name="mensagem" 
                rows="4" 
                placeholder="Conte-nos mais detalhes sobre o que precisa..." 
                value={form.mensagem} 
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="botao-principal btn-enviar">
              Solicitar Cotação no WhatsApp <FaPaperPlane style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;
import { FaMapMarkerAlt, FaWhatsapp, FaVideo } from 'react-icons/fa'
import './Localizacao.css'

function Localizacao() {
  const numeroWhatsapp = "556581169749"
  const endereco = "Av. Presidente Marques, Quilombo, Cuiabá - MT, 78045-008, Centro Empresarial, sala 101"

  const linkMapa = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`

  const agendarReuniao = (tipo) => {
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de agendar uma reunião ${tipo} com a Dantascorr para falar sobre seguros.`
    )
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensagem}`, '_blank')
  }

  return (
    <section id="localizacao" className="secao secao-localizacao">
      <span className="eyebrow">ONDE ESTAMOS</span>
      <h2>Nossa <span className="destaque">Localização</span></h2>
      <p className="localizacao-endereco">
        <FaMapMarkerAlt className="icon-react" /> Av. Presidente Marques – Quilombo, Cuiabá - MT, 78045-008<br />
        Centro Empresarial, sala 101
      </p>

      <div className="localizacao-container">
        <div className="localizacao-mapa">
          <iframe
            title="Localização Dantascorr"
            src={linkMapa}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="localizacao-agendamento">
          <h3>Quer agendar uma reunião?</h3>
          <p>Escolha a melhor forma de conversar com a nossa equipe.</p>

          <button className="btn-agendamento" onClick={() => agendarReuniao('presencial')}>
            <FaMapMarkerAlt className="icon-react" /> Reunião Presencial
          </button>

          <button className="btn-agendamento" onClick={() => agendarReuniao('online')}>
            <FaVideo className="icon-react" /> Reunião Online
          </button>

          <a href={`https://wa.me/${numeroWhatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-agendamento btn-agendamento-whatsapp">
            <FaWhatsapp className="icon-react" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Localizacao;
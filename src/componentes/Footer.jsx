import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const anoAtual = new Date().getFullYear()
  const numeroWhatsapp = "556581169749"
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}`

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-coluna footer-sobre">
          <h4>Dantascorr</h4>
          <p>
            Assessoria de seguros em Cuiabá - MT, cuidando da proteção de
            você, sua família e sua empresa com atendimento próximo e humano.
          </p>
          <div className="footer-socials-texto">
            <a href="https://www.instagram.com/dantascorr.ass/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-coluna">
          <h4>Links rápidos</h4>
          <a href="/#home">Home</a>
          <a href="/#contato">Contato</a>
          <a href="/#localizacao">Localização</a>
          <Link to="/politica-privacidade">Política de Privacidade</Link>
        </div>

        <div className="footer-coluna">
          <h4>Nossa Equipe</h4>
          <p>Luis Alberto Moraes Dantas</p>
          <p>Zenivaldo Dantas da Silva</p>
          <p>Zenivaldo Dantas da Silva Filho</p>
        </div>

        <div className="footer-coluna">
          <h4>Localização</h4>
          <p><FaMapMarkerAlt className="icon-react" /> Av. Presidente Marques – Quilombo, Cuiabá - MT, 78045-008</p>
          <p>Centro Empresarial, sala 101</p>
        </div>

      </div>

      <div className="footer-linha-baixo">
        <p>© {anoAtual} Dantascorr Assessoria de Seguros. Todos os direitos reservados.</p>
        <p className="footer-cnpj">
          CNPJ: <a href="http://cnpj.info/30807759000141" target="_blank" rel="noopener noreferrer">30.807.759/0001-41</a>
        </p>
        <p className="footer-credito">desenvolvido por <a href="https://lvtechbr.com" target="_blank" rel="noopener noreferrer">lvtechbr.com</a></p>
      </div>
    </footer>
  )
}

export default Footer;
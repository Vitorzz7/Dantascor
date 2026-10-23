import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import "./Header.css";
import { servicos, segurosPessoaisExtra, servicosEmpresa } from '../dados/servicos'
import FormularioCotacao from './FormularioCotacao'
import { FaInstagram, FaWhatsapp, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

function Header() {
  const navigate = useNavigate()

  const todosServicosVoce = [...servicos, ...segurosPessoaisExtra]

  const [menuVoceAberto, setMenuVoceAberto] = useState(false)
  const [menuEmpresaAberto, setMenuEmpresaAberto] = useState(false)
  const [servicoHover, setServicoHover] = useState(null)

  const [modalAberto, setModalAberto] = useState(false)
  const [seguroSelecionado, setSeguroSelecionado] = useState(null)

  const [menuMobileAberto, setMenuMobileAberto] = useState(false)
  const [accordionVoceAberto, setAccordionVoceAberto] = useState(false)
  const [accordionEmpresaAberto, setAccordionEmpresaAberto] = useState(false)

  const abrirCotacao = (servico) => {
    setSeguroSelecionado(servico)
    setModalAberto(true)
    setMenuVoceAberto(false)
    setMenuEmpresaAberto(false)
    fecharMenuMobile()
  }

  const conhecerSeguro = (servico) => {
    setMenuVoceAberto(false)
    setMenuEmpresaAberto(false)
    fecharMenuMobile()
    navigate(`/seguro/${servico.titulo}`)
  }

  const fecharMenuMobile = () => {
    setMenuMobileAberto(false)
    setAccordionVoceAberto(false)
    setAccordionEmpresaAberto(false)
  }

  const mensagemWhatsappDireto = encodeURIComponent("Olá! Vim pelo site e quero saber mais sobre os seguros.")
  const linkWhatsappDireto = `https://wa.me/556581169749?text=${mensagemWhatsappDireto}`

  return (
    <nav>
      <img src={logo} alt="Dantascorr" className="logo" />

      {/* ==================== MENU DESKTOP ==================== */}
      <div className="links">
        <a href="#home">HOME</a>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setMenuVoceAberto(true)}
          onMouseLeave={() => { setMenuVoceAberto(false); setServicoHover(null) }}
        >
          <span className="dropdown-trigger">PARA VOCÊ</span>

          {menuVoceAberto && (
            <div className="dropdown-menu-wrapper">
              <div className="dropdown-menu">
                {todosServicosVoce.map((servico) => (
                  <div
                    key={servico.titulo}
                    className="dropdown-item"
                    onMouseEnter={() => setServicoHover(servico)}
                    onClick={() => abrirCotacao(servico)}
                  >
                    {servico.titulo}
                  </div>
                ))}
              </div>

              {servicoHover && (
                <div className="dropdown-flyout">
                  <span className="dropdown-flyout-titulo">{servicoHover.titulo}</span>
                  <button
                    className="dropdown-flyout-botao"
                    onClick={() => conhecerSeguro(servicoHover)}
                  >
                    Conhecer seguro
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setMenuEmpresaAberto(true)}
          onMouseLeave={() => { setMenuEmpresaAberto(false); setServicoHover(null) }}
        >
          <span className="dropdown-trigger">PARA A EMPRESA</span>

          {menuEmpresaAberto && (
            <div className="dropdown-menu-wrapper">
              <div className="dropdown-menu">
                {servicosEmpresa.map((servico) => (
                  <div
                    key={servico.titulo}
                    className="dropdown-item"
                    onMouseEnter={() => setServicoHover(servico)}
                    onClick={() => abrirCotacao(servico)}
                  >
                    {servico.titulo}
                  </div>
                ))}
              </div>

              {servicoHover && (
                <div className="dropdown-flyout">
                  <span className="dropdown-flyout-titulo">{servicoHover.titulo}</span>
                  <button
                    className="dropdown-flyout-botao"
                    onClick={() => conhecerSeguro(servicoHover)}
                  >
                    Conhecer seguro
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <a href="#contato">CONTATO</a>
      </div>

      <div className="nav-socials">
        <a href="https://www.instagram.com/dantascorr.ass/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
          <FaInstagram />
        </a>
        <a href={linkWhatsappDireto} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      {/* ==================== BOTÃO HAMBÚRGUER ==================== */}
      <button className="hamburguer-btn" onClick={() => setMenuMobileAberto(true)} aria-label="Abrir menu">
        <FaBars />
      </button>

      {/* ==================== MENU MOBILE ==================== */}
      {menuMobileAberto && (
        <div className="mobile-overlay" onClick={fecharMenuMobile}>
          <div className="mobile-painel" onClick={(e) => e.stopPropagation()}>

            <div className="mobile-painel-topo">
              <img src={logo} alt="Dantascorr" className="mobile-logo" />
              <button className="mobile-fechar-btn" onClick={fecharMenuMobile} aria-label="Fechar menu">
                <FaTimes />
              </button>
            </div>

            <div className="mobile-painel-conteudo">

              <a href="#home" className="mobile-link" onClick={fecharMenuMobile}>Home</a>

              <div className="mobile-accordion">
                <button
                  className="mobile-accordion-trigger"
                  onClick={() => setAccordionVoceAberto(!accordionVoceAberto)}
                >
                  Para você
                  <FaChevronDown className={accordionVoceAberto ? "chevron aberto" : "chevron"} />
                </button>

                {accordionVoceAberto && (
                  <div className="mobile-accordion-conteudo">
                    {todosServicosVoce.map((servico) => (
                      <div key={servico.titulo} className="mobile-servico-item">
                        <span>{servico.titulo}</span>
                        <div className="mobile-servico-botoes">
                          <button onClick={() => abrirCotacao(servico)}>Cotar</button>
                          <button onClick={() => conhecerSeguro(servico)}>Conhecer</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-accordion">
                <button
                  className="mobile-accordion-trigger"
                  onClick={() => setAccordionEmpresaAberto(!accordionEmpresaAberto)}
                >
                  Para a empresa
                  <FaChevronDown className={accordionEmpresaAberto ? "chevron aberto" : "chevron"} />
                </button>

                {accordionEmpresaAberto && (
                  <div className="mobile-accordion-conteudo">
                    {servicosEmpresa.map((servico) => (
                      <div key={servico.titulo} className="mobile-servico-item">
                        <span>{servico.titulo}</span>
                        <div className="mobile-servico-botoes">
                          <button onClick={() => abrirCotacao(servico)}>Cotar</button>
                          <button onClick={() => conhecerSeguro(servico)}>Conhecer</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#contato" className="mobile-link" onClick={fecharMenuMobile}>Contato</a>

            </div>

            <div className="mobile-painel-rodape">
              <div className="mobile-socials">
                <a href="https://www.instagram.com/dantascorr.ass/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
                  <FaInstagram />
                </a>
                <a href={linkWhatsappDireto} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {seguroSelecionado && (
        <FormularioCotacao
          nomeSeguro={seguroSelecionado.titulo}
          aberto={modalAberto}
          fechar={() => setModalAberto(false)}
        />
      )}
    </nav>
  );
}

export default Header;
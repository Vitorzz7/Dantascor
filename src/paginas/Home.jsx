import { useState } from 'react'
import equipe from '../assets/familia-dantas.jpg'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { servicos } from '../dados/servicos'

function Home() {
  const navigate = useNavigate()

  const [indiceAtual, setIndiceAtual] = useState(0)

  const servicoAtual = servicos[indiceAtual]

  const proximoServico = () => {
    if (indiceAtual === servicos.length - 1) {
      setIndiceAtual(0)
    } else {
      setIndiceAtual(indiceAtual + 1)
    }
  }

  const servicoAnterior = () => {
    if (indiceAtual === 0) {
      setIndiceAtual(servicos.length - 1)
    } else {
      setIndiceAtual(indiceAtual - 1)
    }
  }

  return (
    <div id="home" className="secao">
      <div className='intro'>
        <div className='intro-texto'>
          <h4>A ESCOLHA CERTA PARA VOCÊ</h4>
          <h2>Viva sem preocupações, confiando a sua segurança à <span className="destaque">Dantascorr</span></h2>
          <p>Proteção que você pode confiar, em cada viagem e em cada momento, de forma simples e rápida</p>
        </div>

        <div className="intro-imagem-wrapper">
          <img src={equipe} alt="Família protegida pela Dantascorr" className='intro-imagem'/>
          <div className="badge-flutuante">
            <div className="badge-icone">
              <img src={logo} alt="Dantascorr" className="badge-icone-img" />
            </div>
            <div>
              <strong>Atendimento humano</strong>
              <p>e próximo de você</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-servico" style={{ backgroundImage: `url(${servicoAtual.imagem})` }}>
        <div className="hero-servico-overlay">
          <div className="hero-servico-conteudo">
            <span className="eyebrow">SEGUROS EM DESTAQUE</span>
            <h3>{servicoAtual.titulo}</h3>
            <p>{servicoAtual.descricao}</p>
            <button className='botao-principal' onClick={() => navigate(`/seguro/${servicoAtual.titulo}`)}>
              Conhecer seguro
            </button>
          </div>

          <div className="hero-servico-nav">
            <div onClick={servicoAnterior} className="seta">{"<"}</div>
            <div className="dots">
              {servicos.map((servico, index) => (
                <span
                  key={servico.titulo}
                  className={index === indiceAtual ? "dot dot-ativo" : "dot"}
                  onClick={() => setIndiceAtual(index)}
                ></span>
              ))}
            </div>
            <div onClick={proximoServico} className="seta">{">"}</div>
          </div>
        </div>
      </div>

      <div className='introducao'>
        <span className="eyebrow">VANTAGENS</span>
        <h2>Por que contratar seguros com a Dantascorr?</h2>

        <div className='cartoes'>
          <div className='cartao'>
            <span className="cartao-icone"></span>
            <h3>Corretora local em Cuiabá</h3>
            <p>Atendimento presencial e próximo, no coração de Cuiabá - MT, com quem entende as necessidades da sua região.</p>
          </div>

          <div className='cartao'>
            <span className="cartao-icone"></span>
            <h3>Coberturas e assistências</h3>
            <p>Coberturas amplas e assistências pensadas para proteger tudo o que mais importa para você.</p>
          </div>

          <div className='cartao'>
            <span className="cartao-icone"></span>
            <h3>Atendimento próximo e humano</h3>
            <p>Nosso atendimento é próximo e humano, com interesse genuíno em proteger cada associado. Atuamos desde a escolha do plano mais adequado até o apoio no momento do acionamento do seguro.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
import { useNavigate } from 'react-router-dom'

function PoliticaPrivacidade() {
  const navigate = useNavigate()

  return (
    <div className="detalhe">
      <span className="eyebrow">DANTASCORR ASSESSORIA DE SEGUROS</span>
      <h2>Política de Privacidade</h2>

      <h2>1. Quem somos</h2>
      <p>
        A Dantascorr Assessoria de Seguros valoriza a privacidade e a proteção
        dos dados pessoais de seus clientes e visitantes. Esta Política de
        Privacidade explica como coletamos, usamos, armazenamos e protegemos
        as informações fornecidas através deste site.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <p>
        Ao preencher nossos formulários de cotação ou contato, podemos
        coletar: nome completo, CPF, telefone/WhatsApp, e-mail, CEP e
        informações sobre o seguro de interesse.
      </p>

      <h2>3. Como usamos os dados</h2>
      <ul>
        <li>Para elaborar e enviar cotações de seguro</li>
        <li>Para entrar em contato via WhatsApp, telefone ou e-mail</li>
        <li>Para esclarecer dúvidas sobre nossos produtos e serviços</li>
        <li>Para cumprir obrigações legais e regulatórias do setor de seguros</li>
      </ul>

      <h2>4. Compartilhamento de dados</h2>
      <p>
        Seus dados podem ser compartilhados com as seguradoras parceiras
        exclusivamente para fins de cotação e contratação do seguro
        solicitado. Não vendemos nem compartilhamos seus dados com terceiros
        para fins de marketing sem o seu consentimento.
      </p>

      <h2>5. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger
        os dados pessoais coletados contra acesso não autorizado, perda ou
        uso indevido.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº
        13.709/2018), você tem direito a confirmar a existência de
        tratamento dos seus dados, acessar, corrigir, solicitar a
        eliminação ou a portabilidade dos seus dados, entre outros direitos
        previstos em lei.
      </p>

      <h2>7. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
        tratamento dos seus dados pessoais, entre em contato conosco pelo
        e-mail zenmtmt@gmail.com ou telefone (65) 98116-9749.
      </p>

      <button className="btnVoltar" onClick={() => navigate('/')}>
        Voltar
      </button>
    </div>
  )
}

export default PoliticaPrivacidade
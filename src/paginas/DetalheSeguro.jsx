import { useParams, useNavigate } from 'react-router-dom'

function DetalheSeguro() {
  const { nome } = useParams()
  const navigate = useNavigate()

  const mensagemWhatsapp = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de saber mais sobre o ${nome || 'seguro'}.`
  )
  const linkWhatsapp = `https://wa.me/556581169749?text=${mensagemWhatsapp}`

  return (
    <div className='detalhe'>

      <span className="eyebrow">
        DETALHE DO SEGURO
      </span>

      <h2>{nome}</h2>


      {/* ==================== SEGURO AUTOMÓVEL ==================== */}

      {nome === "Seguro Automovel" && (
        <>
          <p>Proteção para o seu carro. Tranquilidade para você.</p>

          <h2>Por que contratar?</h2>

          <p>
            Seu carro faz parte da sua rotina e muitas vezes é um dos seus
            principais patrimônios. O Seguro Automóvel ajuda a proteger você
            financeiramente contra imprevistos como acidentes, roubos, furtos
            e outros eventos, de acordo com as coberturas contratadas.
          </p>

          <p>
            Com um seguro adequado, você pode contar com proteção para o seu
            veículo e assistência quando mais precisar, evitando que uma
            situação inesperada se transforme em um grande prejuízo.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção contra roubo e furto</li>
            <li>Proteção contra colisões e acidentes</li>
            <li>Assistência 24 horas</li>
            <li>Guincho em caso de pane ou acidente</li>
            <li>Possibilidade de cobertura para danos a terceiros</li>
            <li>Proteção contra incêndio</li>
            <li>Mais segurança para utilizar o veículo no dia a dia</li>
            <li>Redução do impacto financeiro causado por imprevistos</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Colisão e acidentes</h3>
          <p>
            Em caso de acidente, a cobertura contratada pode ajudar com os
            custos relacionados aos danos causados ao veículo, de acordo com
            as condições estabelecidas na apólice.
          </p>

          <h3>Roubo e furto</h3>
          <p>
            Caso o veículo seja roubado ou furtado, o seguro pode oferecer
            indenização conforme as condições, limites e regras estabelecidas
            na apólice.
          </p>

          <h3>Danos a terceiros</h3>
          <p>
            Um acidente pode causar prejuízos não apenas ao seu veículo, mas
            também a outras pessoas. A cobertura para terceiros pode ajudar
            com danos materiais ou corporais causados a terceiros, respeitando
            os limites contratados.
          </p>

          <h3>Assistência 24 horas</h3>
          <p>
            Conte com serviços de assistência para situações inesperadas,
            como pane, problemas mecânicos ou necessidade de guincho,
            conforme os serviços disponíveis no plano contratado.
          </p>

          <h3>Incêndio</h3>
          <p>
            Dependendo da cobertura escolhida, o seguro pode oferecer proteção
            para danos causados por incêndio, seguindo as condições previstas
            na apólice.
          </p>

          <h2>Exemplos de situações</h2>

          <h3>Acidente ou colisão</h3>
          <p>
            Você está dirigindo normalmente e acaba se envolvendo em uma
            colisão. Dependendo da cobertura contratada, o seguro pode ajudar
            nos custos para reparar os danos do veículo.
          </p>

          <h3>Roubo ou furto</h3>
          <p>
            Seu veículo é roubado ou furtado. Com a cobertura correspondente,
            você pode receber uma indenização de acordo com as condições
            estabelecidas no seguro.
          </p>

          <h3>Pane durante uma viagem</h3>
          <p>
            Seu carro apresenta uma pane durante o trajeto. Com a assistência
            24 horas contratada, você pode solicitar serviços de suporte,
            como guincho, de acordo com as condições do plano.
          </p>

          <h3>Danos causados a outro veículo</h3>
          <p>
            Você se envolve em um acidente e acaba causando danos ao veículo
            de outra pessoa. Caso possua cobertura para terceiros, o seguro
            pode ajudar com os custos dentro do limite contratado.
          </p>

          <h2>Proteção de acordo com as suas necessidades</h2>

          <p>
            Cada motorista possui uma rotina e necessidades diferentes. Por
            isso, existem diferentes opções de coberturas e serviços que podem
            ser escolhidos de acordo com o seu perfil, veículo e utilização.
          </p>

          <p>
            Na Dantascorr, você pode encontrar uma opção de seguro adequada às
            suas necessidades e contar com orientação para escolher as
            coberturas que fazem sentido para você.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja seu carro e dirija com mais tranquilidade. Entre em contato
            com a Dantascorr e faça sua cotação.
          </p>
        </>
      )}


      {/* ==================== SEGURO VIAGEM ==================== */}

      {nome === "Seguro Viagem" && (
        <>
          <p>Tranquilidade em todos os destinos.</p>

          <h2>Por que contratar?</h2>

          <p>
            Viajar é aproveitar novas experiências, conhecer lugares e criar
            boas memórias. Porém, imprevistos podem acontecer durante qualquer
            viagem. O Seguro Viagem oferece assistência e proteção durante o
            período contratado, ajudando você a lidar com situações
            inesperadas.
          </p>

          <p>
            Seja em uma viagem nacional ou internacional, contar com um seguro
            pode trazer mais tranquilidade e evitar que determinados
            imprevistos resultem em despesas inesperadas.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Assistência durante a viagem</li>
            <li>Atendimento em situações de emergência</li>
            <li>Possibilidade de cobertura para despesas médicas</li>
            <li>Possibilidade de assistência odontológica</li>
            <li>Proteção relacionada à bagagem</li>
            <li>Opções para viagens nacionais e internacionais</li>
            <li>Suporte durante o período contratado</li>
            <li>Mais tranquilidade para aproveitar sua viagem</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Despesas médicas e hospitalares</h3>
          <p>
            Caso você precise de atendimento médico durante a viagem, o
            seguro pode oferecer cobertura para despesas previstas no plano
            contratado, respeitando os limites e condições da apólice.
          </p>

          <h3>Assistência odontológica</h3>
          <p>
            Alguns planos oferecem assistência odontológica para situações
            de emergência durante a viagem, conforme as condições contratadas.
          </p>

          <h3>Bagagem</h3>
          <p>
            Dependendo do plano escolhido, o seguro pode oferecer proteção em
            situações relacionadas à bagagem, como extravio ou outros eventos
            previstos na apólice.
          </p>

          <h3>Assistência em emergências</h3>
          <p>
            Durante uma viagem, uma emergência pode acontecer a qualquer
            momento. O seguro pode oferecer suporte e assistência de acordo
            com as coberturas contratadas.
          </p>

          <h2>Exemplos de situações</h2>

          <h3>Problema de saúde durante a viagem</h3>
          <p>
            Você está viajando e precisa de atendimento médico
            inesperadamente. Dependendo da cobertura contratada, o seguro
            pode ajudar com as despesas relacionadas ao atendimento.
          </p>

          <h3>Extravio de bagagem</h3>
          <p>
            Sua bagagem não chega ao destino junto com você. Caso exista
            cobertura para essa situação, o seguro pode oferecer assistência
            ou indenização conforme as condições da apólice.
          </p>

          <h3>Emergência durante uma viagem internacional</h3>
          <p>
            Você está fora do país e precisa de atendimento de emergência.
            O Seguro Viagem pode proporcionar suporte durante esse momento,
            de acordo com o plano contratado.
          </p>

          <h2>Viaje com mais tranquilidade</h2>

          <p>
            Cada viagem possui necessidades diferentes. Por isso, é importante
            escolher um plano considerando o destino, duração da viagem e
            tipo de cobertura que você deseja.
          </p>

          <p>
            A Dantascorr pode ajudar você a encontrar uma opção adequada para
            sua viagem, oferecendo orientação na escolha da proteção.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Planeje sua viagem com mais tranquilidade. Entre em contato com
            a Dantascorr e encontre uma opção de Seguro Viagem para o seu
            destino.
          </p>
        </>
      )}


      {/* ==================== SEGURO VIDA ==================== */}

      {nome === "Seguro Vida" && (
        <>
          <p>Proteção para você. Segurança para quem você ama.</p>

          <h2>Por que contratar?</h2>

          <p>
            Nem sempre podemos prever o que vai acontecer no futuro, mas
            podemos nos preparar para diferentes situações. O Seguro de Vida
            oferece proteção financeira para o segurado e seus beneficiários
            em situações previstas na apólice.
          </p>

          <p>
            Mais do que proteger financeiramente, contratar um seguro de vida
            é uma forma de planejamento e cuidado com as pessoas que dependem
            de você.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção financeira para a família</li>
            <li>Segurança para os beneficiários</li>
            <li>Possibilidade de escolher diferentes coberturas</li>
            <li>Opções de proteção de acordo com cada perfil</li>
            <li>Planejamento financeiro para situações inesperadas</li>
            <li>Possibilidade de coberturas adicionais</li>
            <li>Mais tranquilidade para o futuro</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Morte natural</h3>
          <p>
            A cobertura pode proporcionar uma indenização aos beneficiários
            em caso de morte natural do segurado, conforme as condições e
            limites estabelecidos na apólice.
          </p>

          <h3>Morte acidental</h3>
          <p>
            Em caso de morte decorrente de acidente, o seguro pode oferecer
            indenização aos beneficiários quando essa cobertura estiver
            contratada.
          </p>

          <h3>Invalidez</h3>
          <p>
            Alguns planos oferecem proteção para situações de invalidez
            previstas nas condições do seguro, podendo proporcionar suporte
            financeiro ao segurado.
          </p>

          <h3>Doenças graves</h3>
          <p>
            Dependendo do plano contratado, é possível contar com cobertura
            para determinadas doenças graves, oferecendo suporte financeiro
            em um momento delicado.
          </p>

          <h2>Exemplos de situações</h2>

          <h3>Proteção para a família</h3>
          <p>
            Em uma situação prevista na apólice, os beneficiários podem
            receber uma indenização, ajudando a família a lidar com despesas
            e compromissos financeiros.
          </p>

          <h3>Invalidez</h3>
          <p>
            Uma situação inesperada pode impedir o segurado de continuar
            trabalhando. Caso exista essa cobertura, o seguro pode oferecer
            suporte financeiro de acordo com as condições contratadas.
          </p>

          <h3>Doença grave</h3>
          <p>
            Em caso de diagnóstico de uma doença prevista na cobertura,
            o segurado pode receber o benefício contratado para ajudar
            durante o período de tratamento e recuperação.
          </p>

          <h2>Planejamento também é proteção</h2>

          <p>
            O Seguro de Vida pode fazer parte de um planejamento financeiro,
            ajudando a proporcionar maior segurança para você e sua família
            diante de situações inesperadas.
          </p>

          <p>
            Na Dantascorr, você pode encontrar opções de proteção que podem
            ser adaptadas às suas necessidades e ao seu momento de vida.
          </p>

          <h2>Proteja quem realmente importa</h2>

          <p>
            Cuidar do futuro também significa pensar nas pessoas que estarão
            ao seu lado em todos os momentos.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Converse com a Dantascorr e encontre uma opção de Seguro de Vida
            adequada para você e sua família.
          </p>
        </>
      )}


      {/* ==================== SEGURO CONSÓRCIO ==================== */}

      {nome === "Seguro Consorcio" && (
        <>
          <p>Planeje a realização dos seus projetos com mais organização e tranquilidade.</p>

          <h2>Por que contratar?</h2>

          <p>
            O consórcio é uma alternativa para quem deseja planejar a
            aquisição de um bem ou serviço por meio de parcelas, sem utilizar
            o financiamento tradicional.
          </p>

          <p>
            É uma opção que pode ajudar no planejamento financeiro de quem
            pretende adquirir um veículo, imóvel ou outro bem disponível
            no grupo de consórcio.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Planejamento financeiro</li>
            <li>Possibilidade de adquirir veículos</li>
            <li>Possibilidade de adquirir imóveis</li>
            <li>Parcelamento do valor contratado</li>
            <li>Possibilidade de contemplação por sorteio</li>
            <li>Possibilidade de antecipar a contemplação por lance</li>
            <li>Opções de diferentes planos e valores</li>
            <li>Organização para realizar seus projetos</li>
          </ul>

          <h2>Como funciona?</h2>

          <h3>Escolha do plano</h3>
          <p>
            Você escolhe um plano de consórcio de acordo com o bem que deseja
            adquirir e com o valor que pretende investir.
          </p>

          <h3>Pagamento das parcelas</h3>
          <p>
            Os participantes do grupo realizam pagamentos mensais conforme
            as condições estabelecidas no contrato.
          </p>

          <h3>Contemplação</h3>
          <p>
            Durante o período do consórcio, os participantes podem ser
            contemplados por sorteio ou por lance, conforme as regras do
            grupo.
          </p>

          <h3>Utilização da carta de crédito</h3>
          <p>
            Após a contemplação e seguindo as regras do grupo, o participante
            pode utilizar a carta de crédito para adquirir o bem ou serviço
            previsto no contrato.
          </p>

          <h2>Exemplos</h2>

          <h3>Compra de um carro</h3>
          <p>
            Você deseja comprar um carro, mas não tem pressa para adquiri-lo.
            Um consórcio pode permitir que você planeje essa compra por meio
            de parcelas.
          </p>

          <h3>Compra de um imóvel</h3>
          <p>
            Para quem deseja planejar a aquisição de um imóvel, existem
            opções de consórcio destinadas a esse objetivo.
          </p>

          <h3>Planejamento de longo prazo</h3>
          <p>
            O consórcio pode ser uma alternativa para quem deseja organizar
            financeiramente a aquisição de um bem ao longo do tempo.
          </p>

          <h2>Planeje hoje o que você quer conquistar amanhã</h2>

          <p>
            Cada pessoa possui objetivos diferentes. Por isso, é importante
            analisar o prazo, o valor da carta de crédito e as condições do
            grupo antes de escolher um consórcio.
          </p>

          <p>
            A Dantascorr pode ajudar você a encontrar uma opção adequada ao
            seu objetivo e ao seu planejamento financeiro.
          </p>

          <h2>Faça uma cotação</h2>

          <p>
            Quer tirar seus planos do papel? Entre em contato com a Dantascorr
            e conheça as opções disponíveis.
          </p>
        </>
      )}


      {/* ==================== SEGURO RESIDENCIAL ==================== */}

      {nome === "Seguro Residencial" && (
        <>
          <p>Proteção para sua casa. Tranquilidade para sua família.</p>

          <h2>Por que contratar?</h2>

          <p>
            Sua casa é muito mais do que um imóvel. É onde você guarda seus
            bens, constrói histórias e passa grande parte da sua vida.
            Por isso, protegê-la contra imprevistos é uma forma de cuidar do
            seu patrimônio e da sua tranquilidade.
          </p>

          <p>
            O Seguro Residencial oferece proteção para o imóvel e pode incluir
            serviços e coberturas para diferentes situações, de acordo com
            o plano contratado.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção para o imóvel</li>
            <li>Proteção para bens e equipamentos</li>
            <li>Assistência residencial</li>
            <li>Serviço de eletricista</li>
            <li>Serviço de encanador</li>
            <li>Serviço de chaveiro</li>
            <li>Proteção contra incêndio</li>
            <li>Possibilidade de coberturas adicionais</li>
            <li>Mais tranquilidade para sua família</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Incêndio</h3>
          <p>
            O seguro pode oferecer proteção para danos causados por incêndio,
            conforme os limites e condições estabelecidos na apólice.
          </p>

          <h3>Danos elétricos</h3>
          <p>
            Dependendo da cobertura contratada, o seguro pode oferecer
            proteção para determinados danos elétricos que afetem equipamentos
            e instalações.
          </p>

          <h3>Fenômenos naturais</h3>
          <p>
            Alguns planos podem oferecer proteção para determinados eventos
            naturais, como vendavais, tempestades e outros fenômenos,
            conforme as condições contratadas.
          </p>

          <h3>Assistência residencial</h3>
          <p>
            Além das coberturas relacionadas ao patrimônio, alguns seguros
            oferecem serviços de assistência para problemas do dia a dia,
            como eletricista, encanador e chaveiro.
          </p>

          <h2>Exemplos de situações</h2>

          <h3>Problema elétrico</h3>
          <p>
            Uma falha elétrica causa danos em um equipamento da residência.
            Caso essa situação esteja prevista na cobertura contratada,
            o seguro pode ajudar a reduzir o prejuízo.
          </p>

          <h3>Problema hidráulico</h3>
          <p>
            Um vazamento inesperado acontece em sua residência. Com a
            assistência residencial contratada, você pode contar com suporte
            de um profissional, conforme os serviços disponíveis no plano.
          </p>

          <h3>Problema com a chave</h3>
          <p>
            Você perde as chaves de casa ou precisa de ajuda para solucionar
            um problema relacionado à fechadura. A assistência de chaveiro
            pode estar disponível conforme o plano contratado.
          </p>

          <h3>Incêndio</h3>
          <p>
            Um incêndio provoca danos à residência. Caso essa cobertura esteja
            incluída, o seguro pode oferecer indenização de acordo com os
            limites e condições estabelecidos na apólice.
          </p>

          <h2>Proteja o lugar onde você vive</h2>

          <p>
            Imprevistos podem acontecer a qualquer momento. Ter um Seguro
            Residencial ajuda você a estar mais preparado para lidar com
            situações que podem afetar seu imóvel e seu patrimônio.
          </p>

          <p>
            Na Dantascorr, você pode encontrar uma opção de proteção de acordo
            com as características da sua residência e as suas necessidades.
          </p>

          <h2>Viva mais tranquilo</h2>

          <p>
            Sua casa merece proteção. Conte com a Dantascorr para encontrar
            o seguro residencial ideal para você.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja seu patrimônio e sua tranquilidade. Entre em contato com
            a Dantascorr e faça sua cotação.
          </p>
        </>
      )}


      {/* ==================== SEGURO SAÚDE ==================== */}

      {nome === "Seguro Saúde" && (
        <>
          <p>Cuidado com a sua saúde e da sua família, sempre que precisar.</p>

          <h2>Por que contratar?</h2>

          <p>
            Ter acesso rápido a consultas, exames e tratamentos médicos faz
            toda a diferença em momentos de necessidade. O Seguro Saúde
            oferece cobertura para atendimento médico e hospitalar, de
            acordo com o plano contratado.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Acesso a rede de médicos e hospitais credenciados</li>
            <li>Cobertura para consultas e exames</li>
            <li>Possibilidade de internação hospitalar</li>
            <li>Planos individuais, familiares ou empresariais</li>
            <li>Opções de coparticipação ou plano completo</li>
            <li>Mais tranquilidade para cuidar da sua saúde</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Consultas e exames</h3>
          <p>
            Cobertura para consultas médicas e exames, conforme a rede
            credenciada e o plano contratado.
          </p>

          <h3>Internação hospitalar</h3>
          <p>
            Suporte em casos de internação, respeitando as condições e a
            rede prevista na apólice.
          </p>

          <h3>Procedimentos e cirurgias</h3>
          <p>
            Dependendo do plano, o seguro pode oferecer cobertura para
            determinados procedimentos e cirurgias.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Cuide da sua saúde com mais tranquilidade. Entre em contato com
            a Dantascorr e conheça as opções de Seguro Saúde.
          </p>
        </>
      )}


      {/* ==================== SEGURO ACIDENTES PESSOAIS ==================== */}

      {nome === "Seguro Acidentes Pessoais" && (
        <>
          <p>Proteção financeira em caso de acidentes inesperados.</p>

          <h2>Por que contratar?</h2>

          <p>
            Acidentes podem acontecer em qualquer lugar: em casa, no
            trabalho ou durante o lazer. O Seguro de Acidentes Pessoais
            (APP) oferece uma indenização em caso de morte acidental ou
            invalidez decorrente de acidente.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Cobertura para morte acidental</li>
            <li>Cobertura para invalidez permanente por acidente</li>
            <li>Possibilidade de reembolso de despesas médicas</li>
            <li>Valor de contratação acessível</li>
            <li>Proteção complementar ao Seguro de Vida</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Morte acidental</h3>
          <p>
            Indenização aos beneficiários em caso de morte decorrente de
            acidente coberto pela apólice.
          </p>

          <h3>Invalidez permanente</h3>
          <p>
            Suporte financeiro em caso de invalidez permanente total ou
            parcial causada por acidente.
          </p>

          <h3>Despesas médicas e hospitalares</h3>
          <p>
            Alguns planos oferecem reembolso de despesas médicas
            decorrentes de acidentes, conforme as condições contratadas.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteção simples e acessível para imprevistos do dia a dia.
            Entre em contato com a Dantascorr e conheça o Seguro de
            Acidentes Pessoais.
          </p>
        </>
      )}


      {/* ==================== SEGURO PRESTAMISTA ==================== */}

      {nome === "Seguro Prestamista" && (
        <>
          <p>Proteção para o pagamento das suas parcelas em momentos difíceis.</p>

          <h2>Por que contratar?</h2>

          <p>
            Ao contratar um financiamento, empréstimo ou consórcio, imprevistos
            como morte, invalidez ou perda de renda podem comprometer o
            pagamento das parcelas. O Seguro Prestamista ajuda a quitar ou
            manter em dia essas obrigações nessas situações.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Quitação do saldo devedor em caso de morte</li>
            <li>Cobertura para invalidez permanente</li>
            <li>Possibilidade de cobertura para perda de renda</li>
            <li>Proteção para a família contra dívidas pendentes</li>
            <li>Tranquilidade para manter compromissos financeiros em dia</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Morte do segurado</h3>
          <p>
            Quitação total ou parcial do saldo devedor vinculado ao
            financiamento, conforme as condições contratadas.
          </p>

          <h3>Invalidez permanente</h3>
          <p>
            Suporte para o pagamento das parcelas em caso de invalidez
            permanente do segurado.
          </p>

          <h3>Perda de renda</h3>
          <p>
            Alguns planos oferecem cobertura temporária em caso de perda de
            renda involuntária, conforme o contrato.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja seus compromissos financeiros e sua família. Entre em
            contato com a Dantascorr e conheça o Seguro Prestamista.
          </p>
        </>
      )}


      {/* ==================== SEGURO EDUCACIONAL ==================== */}

      {nome === "Seguro Educacional" && (
        <>
          <p>Garanta a continuidade dos estudos, independente do que aconteça.</p>

          <h2>Por que contratar?</h2>

          <p>
            A educação dos filhos é um investimento de longo prazo. O
            Seguro Educacional garante o pagamento das mensalidades
            escolares em caso de falecimento ou invalidez permanente do
            responsável financeiro, protegendo a continuidade dos estudos.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Continuidade da educação em caso de imprevistos</li>
            <li>Cobertura para mensalidades escolares</li>
            <li>Proteção em caso de morte do responsável</li>
            <li>Cobertura para invalidez permanente</li>
            <li>Mais segurança para o planejamento familiar</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Morte do responsável financeiro</h3>
          <p>
            Garantia de pagamento das mensalidades escolares em caso de
            falecimento do responsável, conforme as condições contratadas.
          </p>

          <h3>Invalidez permanente</h3>
          <p>
            Cobertura para manutenção dos estudos em caso de invalidez
            permanente do responsável financeiro.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Garanta o futuro educacional de quem você ama. Entre em contato
            com a Dantascorr e conheça o Seguro Educacional.
          </p>
        </>
      )}


      {/* ==================== SEGURO EMPRESARIAL ==================== */}

      {nome === "Seguro Empresarial" && (
        <>
          <p>Proteção completa para o seu negócio funcionar com mais segurança.</p>

          <h2>Por que contratar?</h2>

          <p>
            O dia a dia de uma empresa envolve riscos que vão além do
            controle do empresário: incêndios, roubos, danos elétricos e
            imprevistos que podem interromper as atividades. O Seguro
            Empresarial ajuda a proteger o patrimônio do seu negócio contra
            esses eventos.
          </p>

          <p>
            Com uma cobertura adequada, sua empresa pode continuar operando
            com mais segurança, mesmo diante de situações inesperadas.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção do imóvel e das instalações</li>
            <li>Cobertura para equipamentos e mercadorias</li>
            <li>Proteção contra incêndio e explosão</li>
            <li>Cobertura para danos elétricos</li>
            <li>Assistência empresarial 24 horas</li>
            <li>Possibilidade de cobertura para roubo e furto</li>
            <li>Planos adaptáveis ao porte do negócio</li>
            <li>Mais tranquilidade para focar na operação da empresa</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Incêndio e explosão</h3>
          <p>
            Proteção para danos causados por incêndio ou explosão nas
            instalações da empresa, conforme os limites e condições da apólice.
          </p>

          <h3>Roubo e furto</h3>
          <p>
            Cobertura para perdas relacionadas a roubo ou furto de bens e
            mercadorias, respeitando as condições contratadas.
          </p>

          <h3>Danos elétricos</h3>
          <p>
            Proteção para equipamentos afetados por problemas elétricos,
            conforme o plano escolhido.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja o patrimônio da sua empresa. Entre em contato com a
            Dantascorr e faça sua cotação de Seguro Empresarial.
          </p>
        </>
      )}


      {/* ==================== SEGURO PATRIMONIAL ==================== */}

      {nome === "Seguro Patrimonial" && (
        <>
          <p>Proteção completa para os bens e o patrimônio da sua empresa.</p>

          <h2>Por que contratar?</h2>

          <p>
            O patrimônio de uma empresa vai além do imóvel: inclui
            equipamentos, mobiliário, estoque e outros bens essenciais para
            a operação. O Seguro Patrimonial ajuda a proteger esses ativos
            contra imprevistos como incêndio, roubo e danos elétricos.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção para imóveis próprios ou alugados</li>
            <li>Cobertura para equipamentos e mobiliário</li>
            <li>Proteção contra incêndio e explosão</li>
            <li>Cobertura para roubo e furto de bens</li>
            <li>Possibilidade de cobertura para estoque</li>
            <li>Planos adaptáveis ao porte da empresa</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Incêndio e explosão</h3>
          <p>
            Proteção para danos causados por incêndio ou explosão nos bens
            segurados, conforme os limites da apólice.
          </p>

          <h3>Roubo e furto de bens</h3>
          <p>
            Cobertura para perdas relacionadas a roubo ou furto de
            equipamentos, mobiliário ou estoque, respeitando as condições
            contratadas.
          </p>

          <h3>Danos elétricos</h3>
          <p>
            Proteção para equipamentos afetados por problemas na rede
            elétrica, conforme o plano escolhido.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja os bens da sua empresa. Entre em contato com a
            Dantascorr e faça sua cotação de Seguro Patrimonial.
          </p>
        </>
      )}


      {/* ==================== SEGURO RESPONSABILIDADE CIVIL ==================== */}

      {nome === "Seguro Responsabilidade Civil" && (
        <>
          <p>Proteção contra danos causados a terceiros durante a atividade da empresa.</p>

          <h2>Por que contratar?</h2>

          <p>
            Durante a operação de uma empresa, podem ocorrer situações que
            causem danos materiais, corporais ou morais a terceiros. O
            Seguro de Responsabilidade Civil ajuda a proteger o negócio
            financeiramente diante desses eventos.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Cobertura para danos causados a terceiros</li>
            <li>Proteção para danos materiais e corporais</li>
            <li>Apoio jurídico em processos relacionados</li>
            <li>Mais segurança para a operação do negócio</li>
            <li>Planos para diferentes segmentos e atividades</li>
            <li>Maior credibilidade perante clientes e parceiros</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Danos materiais a terceiros</h3>
          <p>
            Cobertura para prejuízos causados a bens de terceiros durante a
            atividade da empresa, conforme as condições contratadas.
          </p>

          <h3>Danos corporais a terceiros</h3>
          <p>
            Proteção para situações que envolvam lesões a terceiros
            relacionadas à operação do negócio.
          </p>

          <h3>Despesas com defesa jurídica</h3>
          <p>
            Alguns planos incluem apoio jurídico em processos decorrentes de
            eventos cobertos pela apólice.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja sua empresa contra imprevistos com terceiros. Entre em
            contato com a Dantascorr e conheça o Seguro de Responsabilidade
            Civil.
          </p>
        </>
      )}


      {/* ==================== SEGURO VIDA COLETIVO ==================== */}

      {nome === "Seguro Vida Coletivo" && (
        <>
          <p>Benefício de proteção para os colaboradores da sua empresa.</p>

          <h2>Por que contratar?</h2>

          <p>
            Oferecer um seguro de vida aos colaboradores é uma forma de
            cuidado que fortalece o vínculo entre empresa e equipe. O
            Seguro Vida Coletivo garante proteção financeira aos
            funcionários e seus beneficiários em situações previstas na
            apólice.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Benefício valorizado pelos colaboradores</li>
            <li>Proteção financeira para as famílias da equipe</li>
            <li>Condições diferenciadas para contratação em grupo</li>
            <li>Possibilidade de coberturas adicionais</li>
            <li>Fortalece a retenção de talentos na empresa</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Morte natural e acidental</h3>
          <p>
            Indenização aos beneficiários do colaborador segurado, conforme
            as condições contratadas.
          </p>

          <h3>Invalidez</h3>
          <p>
            Suporte financeiro em caso de invalidez do colaborador,
            conforme a cobertura contratada.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Valorize sua equipe com mais segurança. Entre em contato com a
            Dantascorr e conheça o Seguro Vida Coletivo.
          </p>
        </>
      )}


      {/* ==================== SEGURO AGRONEGÓCIO ==================== */}

      {nome === "Seguro Agronegócio" && (
        <>
          <p>Proteção para quem depende do campo para produzir e crescer.</p>

          <h2>Por que contratar?</h2>

          <p>
            A atividade rural está sujeita a riscos climáticos, sanitários e
            operacionais que podem impactar diretamente a produção. O
            Seguro Agronegócio ajuda a proteger lavouras, maquinário e
            instalações rurais.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção para lavouras e safras</li>
            <li>Cobertura para maquinário agrícola</li>
            <li>Proteção para instalações rurais</li>
            <li>Possibilidade de cobertura contra eventos climáticos</li>
            <li>Planos adaptáveis ao tipo de produção</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Eventos climáticos</h3>
          <p>
            Proteção para perdas na produção causadas por fenômenos
            climáticos previstos na apólice, como geadas, secas ou
            vendavais.
          </p>

          <h3>Maquinário agrícola</h3>
          <p>
            Cobertura para danos ou perdas relacionados a equipamentos
            utilizados na atividade rural.
          </p>

          <h3>Instalações rurais</h3>
          <p>
            Proteção para galpões, silos e demais estruturas utilizadas na
            propriedade, conforme o plano contratado.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja sua produção do campo à colheita. Entre em contato com a
            Dantascorr e faça sua cotação de Seguro Agronegócio.
          </p>
        </>
      )}


      {/* ==================== SEGURO GARANTIA ==================== */}

      {nome === "Seguro Garantia" && (
        <>
          <p>Segurança para o cumprimento de contratos e obrigações.</p>

          <h2>Por que contratar?</h2>

          <p>
            O Seguro Garantia é utilizado para assegurar o cumprimento de
            obrigações contratuais, sejam elas em licitações públicas,
            contratos privados ou obras. Ele traz mais segurança tanto para
            quem contrata quanto para quem presta o serviço.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Garantia de cumprimento contratual</li>
            <li>Alternativa a cauções em dinheiro</li>
            <li>Uso em licitações e contratos públicos</li>
            <li>Uso em contratos privados e obras</li>
            <li>Mais credibilidade perante contratantes</li>
            <li>Preserva o capital de giro da empresa</li>
          </ul>

          <h2>Principais modalidades</h2>

          <h3>Garantia de licitação</h3>
          <p>
            Assegura o cumprimento das propostas apresentadas em processos
            licitatórios, conforme as regras do edital.
          </p>

          <h3>Garantia de execução contratual</h3>
          <p>
            Cobre o cumprimento das obrigações previstas no contrato firmado
            entre as partes.
          </p>

          <h3>Garantia judicial</h3>
          <p>
            Pode ser utilizada para substituir depósitos judiciais em
            determinados processos, conforme a legislação e as condições
            contratadas.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Dê mais credibilidade aos seus contratos. Entre em contato com a
            Dantascorr e conheça as opções de Seguro Garantia.
          </p>
        </>
      )}


      {/* ==================== SEGURO RISCOS CIBERNÉTICOS ==================== */}

      {nome === "Seguro Riscos Cibernéticos" && (
        <>
          <p>Proteção para o seu negócio diante de ameaças digitais.</p>

          <h2>Por que contratar?</h2>

          <p>
            Empresas de todos os tamanhos estão sujeitas a ataques
            cibernéticos, vazamento de dados e outras ameaças digitais. O
            Seguro de Riscos Cibernéticos ajuda a proteger financeiramente o
            negócio diante desses eventos.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Cobertura para vazamento de dados</li>
            <li>Proteção contra ataques cibernéticos</li>
            <li>Suporte em caso de sequestro de dados (ransomware)</li>
            <li>Cobertura para interrupção de negócios por falhas digitais</li>
            <li>Apoio jurídico especializado</li>
            <li>Adequação a exigências da LGPD</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Vazamento de dados</h3>
          <p>
            Cobertura para custos relacionados a incidentes de vazamento de
            dados de clientes ou da própria empresa, conforme a apólice.
          </p>

          <h3>Interrupção de negócios</h3>
          <p>
            Proteção para perdas financeiras decorrentes da paralisação das
            operações causada por um incidente cibernético.
          </p>

          <h3>Responsabilidade civil digital</h3>
          <p>
            Cobertura para reclamações de terceiros relacionadas a falhas de
            segurança da informação, conforme as condições contratadas.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Proteja os dados e a operação da sua empresa. Entre em contato
            com a Dantascorr e conheça o Seguro de Riscos Cibernéticos.
          </p>
        </>
      )}


      {/* ==================== SEGURO TRANSPORTES ==================== */}

      {nome === "Seguro Transportes" && (
        <>
          <p>Proteção para as suas cargas em qualquer trajeto.</p>

          <h2>Por que contratar?</h2>

          <p>
            Durante o transporte, mercadorias estão sujeitas a riscos como
            acidentes, roubo e avarias. O Seguro Transportes protege o valor
            da carga durante o trajeto contratado.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Proteção da carga durante o transporte</li>
            <li>Cobertura para roubo e furto de mercadorias</li>
            <li>Cobertura para acidentes durante o trajeto</li>
            <li>Opções para transporte rodoviário, aéreo e marítimo</li>
            <li>Planos por viagem ou por operação contínua</li>
            <li>Mais segurança para negociar com clientes e fornecedores</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Roubo e furto de carga</h3>
          <p>
            Cobertura para perdas decorrentes de roubo ou furto durante o
            transporte, conforme as condições contratadas.
          </p>

          <h3>Acidentes durante o trajeto</h3>
          <p>
            Proteção para danos causados à carga em caso de colisão ou
            acidente durante o transporte.
          </p>

          <h3>Avarias na mercadoria</h3>
          <p>
            Cobertura para determinados danos causados à carga durante o
            transporte, respeitando os limites da apólice.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Transporte suas mercadorias com mais segurança. Entre em contato
            com a Dantascorr e faça sua cotação de Seguro Transportes.
          </p>
        </>
      )}


      {/* ==================== SEGURO AUTO FROTA ==================== */}

      {nome === "Seguro Auto Frota" && (
        <>
          <p>Gestão e proteção completa para a frota da sua empresa.</p>

          <h2>Por que contratar?</h2>

          <p>
            Empresas que possuem vários veículos precisam de uma gestão
            eficiente de riscos. O Seguro Auto Frota reúne em um único plano
            a proteção de todos os veículos da empresa, facilitando a
            administração e podendo reduzir custos.
          </p>

          <h2>Principais benefícios</h2>

          <ul>
            <li>Gestão simplificada de todos os veículos em um plano</li>
            <li>Proteção contra roubo, furto e colisão</li>
            <li>Assistência 24 horas para toda a frota</li>
            <li>Condições diferenciadas conforme o tamanho da frota</li>
            <li>Possibilidade de cobertura para danos a terceiros</li>
            <li>Mais controle sobre os custos com veículos</li>
          </ul>

          <h2>Principais coberturas</h2>

          <h3>Colisão e acidentes</h3>
          <p>
            Cobertura para danos aos veículos da frota envolvidos em
            acidentes, conforme as condições contratadas.
          </p>

          <h3>Roubo e furto</h3>
          <p>
            Proteção contra roubo ou furto de qualquer veículo pertencente
            à frota segurada.
          </p>

          <h3>Assistência 24 horas</h3>
          <p>
            Suporte para toda a frota em casos de pane, acidente ou
            necessidade de guincho, conforme os serviços do plano.
          </p>

          <h2>Faça sua cotação</h2>

          <p>
            Simplifique a gestão da frota da sua empresa. Entre em contato
            com a Dantascorr e faça sua cotação de Seguro Auto Frota.
          </p>
        </>
      )}


      <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="btnWhatsapp">
        Fale com a gente no WhatsApp
      </a>

      <button className="btnVoltar" onClick={() => navigate('/')}>
        Voltar
      </button>

    </div>
  )
}

export default DetalheSeguro;
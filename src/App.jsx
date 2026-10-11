import { Routes, Route } from 'react-router-dom'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Home from './paginas/Home'
import Parceiros from './componentes/Parceiros'
import Localizacao from './componentes/Localizacao'
import Contato from './paginas/Contato'
import DetalheSeguro from './paginas/DetalheSeguro'
import PoliticaPrivacidade from './paginas/PoliticaPrivacidade'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
          <Parceiros />
          <Localizacao />
          <Contato />
          <Footer />
        </>
      } />
      <Route path="/seguro/:nome" element={<DetalheSeguro />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
    </Routes>
  )
}

export default App;
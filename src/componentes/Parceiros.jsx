import React from 'react'
import './Parceiros.css'


const seguradoras = [
  { nome: "Allianz", domain: "allianz.com.br" },
  { nome: "Azul Seguros", domain: "azulseguros.com.br" },
  { nome: "Bradesco Seguros", domain: "bradescoseguros.com.br" },
  { nome: "Chubb", domain: "chubb.com" },
  { nome: "HDI Seguros", domain: "hdiseguros.com.br" },
  { nome: "Mapfre", domain: "mapfre.com.br" },
  { nome: "Sompo Seguros", domain: "sompo.com.br" },
  { 
    nome: "Suhai Seguradora", 
    customIcon: "https://www.suhaiseguradora.com/favicon.ico" 
  },
  { nome: "SulAmérica", domain: "sulamerica.com.br" },
  { nome: "Tokio Marine", domain: "tokiomarine.com.br" },
  { nome: "Zurich", domain: "zurich.com.br" },
  { nome: "Youse", domain: "youse.com.br" },
  { nome: "Sura", domain: "segurossura.com.br" },
  { nome: "Capemisa", domain: "capemisa.com.br" },
  { nome: "Ezze Seguros", domain: "ezzeseguros.com.br" },
  { nome: "Fairfax", domain: "fairfax.com.br" },
  { nome: "Starr", domain: "starrinsurance.com" },
  { nome: "Sancor Seguros", domain: "sancorseguros.com.br" },
  { 
    nome: "AXA", 
    customIcon: "https://cdn.simpleicons.org/axa/00008F" 
  },
  { nome: "Avla", domain: "avla.com" },
  { nome: "Berkley", domain: "berkley.com.br" },
  { nome: "MAG Seguros", domain: "mag.com.br" }
]

function Parceiros() {
  const listaDuplicada = [...seguradoras, ...seguradoras]

  return (
    <section className="secao-parceiros" id="parceiros">
      <span className="eyebrow">PARCERIAS DE CONFIANÇA</span>
      <h2>Principais Seguradoras</h2>
      <p className="parceiros-subtitulo">
        Trabalhamos em parceria com as maiores e mais bem avaliadas seguradoras do mercado.
      </p>

      <div className="carrossel-container">
        <div className="carrossel-track">
          {listaDuplicada.map((item, index) => {
           
            const iconUrl = item.customIcon 
              ? item.customIcon 
              : `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`

            return (
              <div key={index} className="card-seguradora">
                <img 
                  src={iconUrl} 
                  alt={item.nome} 
                  title={item.nome} 
                  className="favicon-img"
                  onError={(e) => {
                  
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4af37'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'/%3E%3C/svg%3E";
                  }}
                />
                <span className="nome-seguradora">{item.nome}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Parceiros;
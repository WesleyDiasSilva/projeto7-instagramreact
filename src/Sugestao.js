import React from 'react'

function Sugestao(props) {
  return (
    <div class="sugestao">
            <div class="usuario">
              <img src={props.imagemUser} alt="imagem-perfil-sugestao"/>
              <div class="texto">
                <div class="nome">{props.nomeUser}</div>
                <div class="razao">{props.statusUser}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
  )
}

export default Sugestao

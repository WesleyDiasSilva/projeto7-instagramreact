import React from 'react'

function Usuario(props) {

  let [nomeUsuario, setNomeUsuario] = React.useState()

  function mudaNome(){
    let nome = prompt('Qual é o seu nome?');
    setNomeUsuario(nome)
  }


  

  return (
      <div class="usuario">
          <img src="assets/img/catanacomics.svg" alt="imagem-perfil-usuario"/>
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              {nomeUsuario ? nomeUsuario : 'Catana'}
              <ion-icon name="pencil" onClick={() => mudaNome()}></ion-icon>
            </span>
          </div>
      </div>
  )
}

export default Usuario

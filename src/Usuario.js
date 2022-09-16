import React from 'react'

function Usuario(props) {

  let [nomeUsuario, setNomeUsuario] = React.useState()
  let [fotoUsuario, setFotoUsuario] = React.useState()

  function mudaNome(){
    let nome = prompt('Qual é o seu nome?');
    setNomeUsuario(nome)
  }

  function mudaFoto(){
    let foto = prompt('Preencha com o link de uma imagem por favor!');
    setFotoUsuario(foto)
  }
  

  return (
      <div class="usuario">
          <img onClick={() => mudaFoto()} src={fotoUsuario ? fotoUsuario : "assets/img/catanacomics.svg"} alt="imagem-perfil-usuario"/>
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

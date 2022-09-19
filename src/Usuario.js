import React from 'react'

function Usuario(props) {

  let [nomeUsuario, setNomeUsuario] = React.useState(null)
  let [fotoUsuario, setFotoUsuario] = React.useState(null)

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
          <img onClick={() => mudaFoto()} src={fotoUsuario ? fotoUsuario : props.imagem} alt="imagem-perfil-usuario"/>
          <div class="texto">
            <strong>{props.perfil}</strong>
            <span>
              {nomeUsuario ? nomeUsuario : props.nome}
              <ion-icon name="pencil" onClick={() => mudaNome()}></ion-icon>
            </span>
          </div>
      </div>
  )
}

export default Usuario;
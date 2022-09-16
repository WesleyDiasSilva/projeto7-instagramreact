import React from 'react'

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagemPerfil} alt='foto-do-story'/>
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  )
}

export default Story

import React from 'react'

function Post(props) {
  return (
    <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.srcPerfil} alt='foto-do-post'/>
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.srcPost} alt='foto-do-post'/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt='foto-curtida'/>
                <div class="texto">
                  Curtido por <strong>{props.curtidoPor}</strong> e <strong>{props.numeroLike}</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Post

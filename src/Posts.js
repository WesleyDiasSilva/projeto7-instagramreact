import React from 'react'
import Post from './Post'
import Stories from './Stories'

function Posts() {
  return (
    <div>
      <div class="esquerda">
        <Stories/>

        <div class="posts">
          <Post nome={'wesley'} srcPerfil={'assets/img/meowed.svg'} srcPost={'assets/img/gato-telefone.svg'}/>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/barked.svg" alt='imagem-usuario-post'/>
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/dog.svg" alt='imagem-post'/>
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
                <img src="assets/img/adorable_animals.svg" alt='imagem-perfil-curtida'/>
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
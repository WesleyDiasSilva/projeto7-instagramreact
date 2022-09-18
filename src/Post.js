import React from 'react'

function Post(props) {

  let [estadoSalvaPostagem, setEstadoSalvaPostagem] = React.useState();
  let [estadoCurtida, setEstadoCurtida] = React.useState(false);
  let [numCurtida, setNumCurtida] = React.useState(Number(props.numeroLike))
  

  function salvaPost(){
    if(estadoSalvaPostagem === undefined){
      setEstadoSalvaPostagem(true)
    }else{
      setEstadoSalvaPostagem(!estadoSalvaPostagem)
    }
  }

  function atualizaLikes(){
    if(estadoCurtida){
      setNumCurtida(numCurtida -1)
      console.log('entrou 1')
    }else{
      setNumCurtida(numCurtida +1)
      console.log('entrou 2')
    }
  }

  function curtePost(){
    if(estadoCurtida === undefined){
      setEstadoCurtida(true)
    }else{
      setEstadoCurtida(!estadoCurtida)
    }
    atualizaLikes()
  }

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

            <div class="conteudo" onDoubleClick={() => curtePost()}>
              <img src={props.srcPost} alt='foto-do-post'/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon class={estadoCurtida ? 'like' : 'unlike'} onClick={() => curtePost()} name={estadoCurtida ? 'heart' : "heart-outline"}></ion-icon>
                  <ion-icon onClick={() => atualizaLikes(numCurtida)} name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={estadoSalvaPostagem ? "bookmark" : "bookmark-outline"} onClick={() => salvaPost() }></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagemDeQuemCurtiu} alt='foto-curtida'/>
                <div class="texto">
                  Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {numCurtida} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Post

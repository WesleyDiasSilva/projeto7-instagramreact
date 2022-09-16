import React from 'react'
import Post from './Post'
import Stories from './Stories'

function Posts() {

  const todosPosts = [
    {nome:'meowed',srcPerfil:'assets/img/meowed.svg',srcPost:'assets/img/gato-telefone.svg',curtidoPor:'respondeAí',numeroLike:'outras 101.523 pessoas'},
    {nome:'barked',srcPerfil:'assets/img/barked.svg',srcPost:'assets/img/dog.svg',curtidoPor:'adorable_animals',numeroLike:'outras 99.159 pessoas'}
  ]

  return (
    <div>
      <div class="esquerda">
        <Stories/>
        <div class="posts">
          {todosPosts.map((p) => <Post nome={p.nome} srcPerfil={p.srcPerfil} srcPost={p.srcPost} curtidoPor={p.curtidoPor} numeroLike={p.numeroLike}/>)}

        </div>
      </div>
    </div>
  )
}

export default Posts
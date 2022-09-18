import React from 'react'
import Post from './Post'
import Stories from './Stories'

function Posts() {

  const todosPosts = [
    {nome:'meowed',
    srcPerfil:'assets/img/meowed.svg'
    ,srcPost:'assets/img/gato-telefone.svg'
    ,imagemDeQuemCurtiu:'assets/img/respondeai.svg'
    ,curtidoPor:'respondeAí'
    ,numeroLike:'101523'},

    {nome:'barked'
    ,srcPerfil:'assets/img/barked.svg'
    ,srcPost:'assets/img/dog.svg',
    imagemDeQuemCurtiu: 'assets/img/adorable_animals.svg'
    ,curtidoPor:'adorable_animals'
    ,numeroLike:'99159'}
  ]

  return (
    <div>
      <div class="esquerda">
        <Stories/>
        <div class="posts">
          {todosPosts.map((p) => <Post key={p.srcPost} imagemDeQuemCurtiu={p.imagemDeQuemCurtiu} nome={p.nome} srcPerfil={p.srcPerfil} srcPost={p.srcPost} curtidoPor={p.curtidoPor} numeroLike={p.numeroLike}/>)}

        </div>
      </div>
    </div>
  )
}

export default Posts
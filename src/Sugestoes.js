import React from 'react'
import Sugestao from './Sugestao'

function Sugestoes() {

  const todasSugestoes= [
    {
      imagemUser:'assets/img/bad.vibes.memes.svg',
      nomeUser:'bad.vibes.memes',
      statusUser:"Segue você"
    },
    {
      imagemUser:'assets/img/chibirdart.svg',
      nomeUser:'chibirdart',
      statusUser:"Segue você"
    },
    {
      imagemUser:'assets/img/razoesparaacreditar.svg',
      nomeUser:'razoesparaacreditar',
      statusUser:"Novo no Instagram"
    },
    {
      imagemUser:'assets/img/adorable_animals.svg',
      nomeUser:'adorable_animals',
      statusUser:"Segue você"
    },
    {
      imagemUser:'assets/img/smallcutecats.svg',
      nomeUser:'smallcutecats',
      statusUser:"Segue você"
    }
  ]

  return (
      <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {todasSugestoes.map((s) => <Sugestao key={s.imagemUser} imagemUser={s.imagemUser} nomeUser={s.nomeUser} statusUser={s.statusUser}/>)}
          
        </div>
  )
}

export default Sugestoes
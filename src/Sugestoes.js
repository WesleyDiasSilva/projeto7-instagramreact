import React from 'react'
import Sugestao from './Sugestao'

function Sugestoes() {
  return (
      <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <Sugestao imagemUser='assets/img/bad.vibes.memes.svg' nomeUser='bad.vibes.memes' statusUser="Segue você"/>
          <Sugestao imagemUser='assets/img/chibirdart.svg' nomeUser='chibirdart' statusUser="Segue você"/>
          <Sugestao imagemUser='assets/img/razoesparaacreditar.svg' nomeUser='razoesparaacreditar' statusUser="Novo no Instagram"/>
          <Sugestao imagemUser='assets/img/adorable_animals.svg' nomeUser='adorable_animals' statusUser="Segue você"/>
          <Sugestao imagemUser='assets/img/smallcutecats.svg' nomeUser='smallcutecats' statusUser="Segue você"/>
        </div>
  )
}

export default Sugestoes
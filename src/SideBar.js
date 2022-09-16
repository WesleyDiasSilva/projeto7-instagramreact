import React from 'react'
import Usuario from './Usuario'
import Sugestoes from './Sugestoes'

function SideBar() {
  return (
    <div>
      <div class="sidebar">
        <Usuario nome='Wesley'/>
        <Sugestoes/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  )
}

export default SideBar

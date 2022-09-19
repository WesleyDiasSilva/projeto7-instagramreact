import React from 'react'
import Usuario from './Usuario'
import Sugestoes from './Sugestoes'

function SideBar() {
  return (
    <div>
      <div class="sidebar">
        <Usuario perfil={'wdiazs'} nome={'Wesley'} imagem={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2THmKfGvPsF9cGSRnUm5HNlzW-0kBu3VwKA&usqp=CAU'}/>
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

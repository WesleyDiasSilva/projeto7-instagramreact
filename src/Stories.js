import React from 'react'
import Story from './Story'

function Stories() {
  return (
    <div class="stories">
    <Story imagemPerfil={"assets/img/9gag.svg"} user={'9gag'}/>
    <Story imagemPerfil={"assets/img/meowed.svg"} user={'meowed'}/>
    <Story imagemPerfil={"assets/img/barked.svg"} user={'barked'}/>
    <Story imagemPerfil={"assets/img/nathanwpylestrangeplanet.svg"} user={'nathanwpylestrangeplanet'}/>
    <Story imagemPerfil={"assets/img/wawawicomics.svg"} user={'wawawicomics'}/>
    <Story imagemPerfil={"assets/img/respondeai.svg"} user={'respondeai'}/>
    <Story imagemPerfil={"assets/img/filomoderna.svg"} user={'filomoderna'}/>
    <Story imagemPerfil={"assets/img/memeriagourmet.svg"} user={'memeriagourmet'}/>

    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
  )
}

export default Stories

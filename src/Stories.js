import React from 'react'
import Story from './Story'

function Stories() {

  const todosStories = [
    {imagemPerfil: 'assets/img/9gag.svg',user:'9gag'}, 
    {imagemPerfil: 'assets/img/meowed.svg',user:'eowed'},
    {imagemPerfil: 'assets/img/barked.svg',user:'barked'},
    {imagemPerfil: 'assets/img/nathanwpylestrangeplanet.svg',user:'nathanwpylestrangeplanet'},
    {imagemPerfil: 'assets/img/wawawicomics.svg',user:'wawawicomics'},
    {imagemPerfil: 'assets/img/respondeai.svg',user:'respondeai'},
    {imagemPerfil: 'assets/img/filomoderna.svg',user:'filomoderna'},
    {imagemPerfil: 'assets/img/memeriagourmet.svg',user:'memeriagourmet'}
]


  return (
    <div class="stories">
      {todosStories.map((s) => <Story imagemPerfil={s.imagemPerfil} user={s.user}/>)}
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
  )
}

export default Stories

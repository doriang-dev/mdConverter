import React from 'react'
// Assets
import logo from '../assets/Logo.svg'
// Styles
import './styles/Components/StaticModule.css'

export default class StaticModule extends React.Component {
  render () {
    return (
      <div className='module static-module'>
        <h1><img src={logo} alt='Markdown Converter Logo' /> </h1>
        <p className='description'>
          Ce convertisseur permet de convertir des fichiers Markdown en HTML, TXT ou encore de l'envoyer à une imprimante pour imprimer rapidement un fichier Markdown sans avoir à configurer le style.
          <br /><br />
          Ce site ne conserve aucune données comme toutes les conversions se font dans votre navigateur. Aucun serveur ne reçoit vos fichiers pour les traiter.
          <br /><br />
          Markdown est un langage de balisage léger. Son but est d'offrir une syntaxe facile à lire et à écrire. Un document balisé par Markdown peut être lu en l'état sans donner l’impression d'avoir été balisé ou formaté par des instructions particulières.
          <a href='https://fr.wikipedia.org/wiki/Markdown' target='_blank' rel='noopener noreferrer'> En savoir plus.</a>
        </p>
      </div>
    )
  }
}

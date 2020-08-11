import React from 'react'

// Components
import Converter from './Converter.jsx'
import AdvancedOptions from './AdvancedOptions.jsx'
import Error from './Error.jsx'

// Utils
import { fileToText, download, mdToHtml, error, css, openInNewWindow } from '../utils/function'

// Styles
import './styles/Components/ConvertModule.css'

export default class ConvertModule extends React.Component {
  constructor (props) {
    super(props)
    this.handleCssFile = this.handleCssFile.bind(this)
    this.handleConvertClick = this.handleConvertClick.bind(this)
    this.handlePrintClick = this.handlePrintClick.bind(this)
    this.handleMdFile = this.handleMdFile.bind(this)
    this.convert = this.convert.bind(this)
    this.print = this.print.bind(this)

    this.state = {
      css: false,
      md: false,
      filename: 'hello',
      error: false,
      textError: 'Erreur: Pas de Md ici'
    }

    this.css = '.markdown-body {margin: 50px 70px}'
    this.md = null
    this.githubMdCssLink = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'
  }

  convert (format) {
    format = format.toLowerCase()

    const filename = this.state.filename + '.' + format
    let mime = ''
    let file = ''

    switch (format) { // TODO: Add another languages convert features (PDF, TXT, ...)
      case 'html':
        mime = 'text/html'
        file += css(this.css, this.githubMdCssLink)
        file += mdToHtml(this.md)
        break
      case 'txt':
        mime = 'plain/text'
        file += this.md
        break
      default:
        error('Gros bug')
        break
    }

    download(filename, mime, file)
  }

  print () {
    const html = mdToHtml(this.md)
    openInNewWindow(html, this.githubMdCssLink)
  }

  handleMdFile (file) {
    const filename = file.name.replace('.md', '')
    fileToText(file)
      .then(md => {
        this.setState({ md: true, filename, error: false })
        this.md = md
      })
  }

  handleCssFile (file) {
    fileToText(file)
      .then(css => {
        this.setState({ css: true })
        this.css += css
      })
  }

  handleConvertClick (format) {
    if (!this.state.md) this.setState({ error: true, textError: 'Aucun fichier markdown a convertir' })
    else this.convert(format)
  }

  handlePrintClick () {
    if (!this.state.md) this.setState({ error: true, textError: 'Aucun fichier markdown a imprimer' })
    else this.print()
  }

  render () {
    return (
      <div className='convert-module module'>
        <div>
          <Converter
            onConvertClick={this.handleConvertClick}
            onPrintClick={this.handlePrintClick}
            onFile={this.handleMdFile}
          />
          <Error
            visible={this.state.error}
            content={this.state.textError}
          />
          <AdvancedOptions
            onFile={this.handleCssFile}
          />
        </div>
      </div>
    )
  }
}

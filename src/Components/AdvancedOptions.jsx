import React from 'react'

// Styles
import './styles/js.css'
import './styles/Components/AdvancedOptions.css'

export default class AdvancedOptions extends React.Component {
  constructor (props) {
    super(props)
    this.handleTogglerAdvancedOptions = this.handleTogglerAdvancedOptions.bind(this)
    this.handleFileInputChange = this.handleFileInputChange.bind(this)
    this.state = {
      visible: false
    }
  }

  handleTogglerAdvancedOptions () {
    this.setState({ visible: !this.state.visible })
  }

  handleFileInputChange () {
    const fileInput = document.getElementById('cssFile')
    const file = fileInput.files[0]

    const label = document.getElementById('labelCss')

    label.textContent = file.name

    this.props.onFile(file)
  }

  render () {
    return (
      <div className='advanced-options'>
        <p
          className='link'
          onClick={this.handleTogglerAdvancedOptions}
        >
          Options avancées
        </p>
        <div className={!this.state.visible ? 'inactive' : null}>
          <label className='label-file input-css' htmlFor='cssFile' id='labelCss'>Importez votre fichier CSS</label>
          <input
            className='input-file'
            id='cssFile'
            type='file'
            accept='.css'
            placeholder='Choose a file'
            onChange={this.handleFileInputChange}
          />
          <i>Element à styliser: p, ul, ol, li, h1-6, details, summary, a, strong, img, code, pre, hr, table, td, th, kbd, blockquote, dl, dd, i.</i>
        </div>
      </div>
    )
  }
}

import React from 'react'

// Components
import Dropdown from 'react-dropdown'

// Styles
import 'react-dropdown/style.css'
import './styles/Components/Converter.css'

export default class Converter extends React.Component {
  constructor (props) {
    super(props)
    this.convertOptions = ['HTML', 'TXT', 'Cancel']
    this.nbFormats = this.convertOptions.length
    this.state = {
      dropdownValue: 'Convert'
    }
    this.handleDropdownValueChange = this.handleDropdownValueChange.bind(this)
    this.handleFileInputChange = this.handleFileInputChange.bind(this)
  }

  handleFileInputChange () {
    const fileInput = document.getElementById('mdFile')
    const file = fileInput.files[0]

    const label = document.getElementById('labelMd')

    label.textContent = file.name

    this.props.onFile(file)
  }

  handleDropdownValueChange (e) {
    let value
    if (e.value !== 'Cancel') {
      value = e.value
      this.props.onConvertClick(value)
    } else {
      value = 'Convert'
    }

    this.setState({ dropdownValue: value })
  }

  render () {
    return (
      <div>
        <label className='label-file' htmlFor='mdFile' id='labelMd'>Choisissez un fichier .md</label>
        <input
          className='input-file'
          id='mdFile'
          type='file'
          accept='.md'
          placeholder='Choose a file'
          onChange={this.handleFileInputChange}
        />
        <div className='btn-container'>
          <button className='btn' onClick={this.props.onPrintClick}>Print</button>
          <Dropdown
            options={this.convertOptions}
            className='btn'
            placeholder={this.state.dropdownValue}
            controlClassName='control'
            arrowClassName='arrow'
            onChange={this.handleDropdownValueChange}
          />
        </div>
      </div>
    )
  }
}

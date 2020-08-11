import React from 'react'

// Styles
import './styles/Components/Error.css'
import './styles/js.css'

export default class Error extends React.Component {
  render () {
    return (
      <div className={this.props.visible ? 'error' : 'inactive'}>
        {this.props.content}
      </div>
    )
  }
}

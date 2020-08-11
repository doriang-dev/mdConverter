import React from 'react'
// Components
import StaticModule from './StaticModule.jsx'
import ConvertModule from './ConvertModule.jsx'

// Styles
import './styles/Components/App.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='App-container'>
        <StaticModule />
        <ConvertModule />
      </div>
    )
  }
}

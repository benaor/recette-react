import React, { Component } from 'react'
import recettes from './recettes'

// CSS
import './App.css'

//Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card';
class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemple = () => this.setState({ recettes })

  render() {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return (
      <div className='box'>
        <Header
          pseudo={this.state.pseudo} />
        <div className='cards'>
          {cards}
        </div>
      <Admin chargerExemple={this.chargerExemple} />
      </div >
    )
  }
}

export default App

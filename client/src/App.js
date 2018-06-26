import React, { Component } from 'react';
import { Header }from './Header';
import { MenuBox } from './MenuBox';
import { DataBox } from './DataBox';

export class App extends Component {
  state = { smiles: 'No molecule has been submitted yet.' }

  // Lifecycle Methods:
  componentDidMount() {
    setInterval( () => {
      let smiles = this.state.smiles;
      if(smiles !== document.JME.smiles()) {
        this.changeSmile();
      }
    }, 1000)
  }


  // Functions:
  changeSmile = () => {
    const value = document.JME.smiles();
    this.setState({ smiles: value });
  }

  // Render:
  render() {
    return (
      <div>
        <Header/>
        <div className='section'>
          <MenuBox onChange={this.changeSmile} />
        </div>
        <div>
          <DataBox smiles={this.state.smiles} />
        </div>
      </div>
    )
  }
}

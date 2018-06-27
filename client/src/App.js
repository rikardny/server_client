import React, { Component } from 'react';
import { Header }from './Header';
import { MenuBox } from './MenuBox';
import { DataBox } from './DataBox';

export class App extends Component {
  state = { smiles: 'No molecule has been submitted yet.' }

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

import React, { Component } from 'react';
import { Header } from './Header';
import { MenuBox } from './MenuBox';
import { DataBox } from './DataBox';

export class App extends Component {
  state = { smiles: 'No molecule has been submitted yet.' }

  changeSmile = () => {
    const value = document.JME.smiles();
    this.setState({ smiles: value });
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          <MenuBox onChange={this.changeSmile} />
        </div>
        <div>
          <DataBox smiles={this.state.smiles} />
        </div>
      </div>
    )
  }
}

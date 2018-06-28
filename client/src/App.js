import React, { Component } from 'react';
import { Header }from './Header';
import { MenuBox } from './MenuBox';
import { ResultBox } from './ResultBox';

export class App extends Component {
  state = { smiles: 'No molecule has been submitted yet.' }

  // Functions:
  changeSmile() {
    const value = document.JME.smiles();
    this.setState({ smiles: value });
  }

  handleChange() {
    console.log('hej')
  }

  // Render:
  render() {
    return (
      <div>
        <Header/>
        <div className="section">
          <MenuBox onChange={this.changeSmile} />
        </div>
        <div className="section">
          <ResultBox smiles={this.state.smiles} />
        </div>
      </div>
    )
  }
}

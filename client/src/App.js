import React, { Component } from 'react';
import { Header }from './Header';
import { MenuBox } from './MenuBox';
import { ResultBox } from './ResultBox';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Metpred: false,
      cpLogD: false,
      PTP: false,
      Prosilico: false
    }

    this.changeMethods = this.changeMethods.bind(this);
  }

  // Functions:
  changeMethods(e) {
    let m = e.target.dataset.message;
    this.setState({ [m]: !this.state[m]});
  }

  // Render:
  render() {
    return (
      <div>
        <Header/>
        <div className="section">
          <MenuBox methods={this.state} changeMethods={this.changeMethods}/>
        </div>
        <div className="section">
          <ResultBox smiles={this.state.smiles} />
        </div>
      </div>
    )
  }
}

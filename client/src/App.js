import React, { Component } from 'react';
import { Header }from './Header';
import { MenuBox } from './MenuBox';
import { ResultList } from './ResultList';

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
          <ResultList methods={this.state}/>
        </div>
      </div>
    )
  }
}

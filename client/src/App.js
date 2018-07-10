import React, { Component } from 'react';
import { Header } from './Header';
import { MenuBox } from './MenuBox';
import { ResultList } from './ResultList';
import 'bulma/css/bulma.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Metpred: false,
      cpLogD: false,
      PTP: false,
      Prosilico: false,
    }

    this.changeModels = this.changeModels.bind(this);
  }

  // Functions:
  changeModels(e) {
    let m = e.target.dataset.message;
    this.setState({ [m]: !this.state[m]});
  }

  // Render:
  render() {
    return (
      <div>
        <Header />
        <MenuBox models={this.state} changeModels={this.changeModels} />
        <ResultList models={this.state} />
      </div>
    )
  }
}

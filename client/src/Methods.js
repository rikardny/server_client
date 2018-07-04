import React, { Component } from 'react';

export class Methods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Metpred: true,
      cpLogD: false,
      PTP: true,
      Prosilico: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let m = e.target.dataset.message;
    this.setState({ [m]: !this.state[m]});
  }

  // Render:
  render() {
    let availableMethods = Object.keys(this.state);
    let activeMethods = Object.values(this.state);

    let methodList = availableMethods.map(
      (method, i) => {
        let isActive = "";

        if(activeMethods[i]) {
          isActive = "is-active";
        };

        return(
          <a key={"method_" + i}
            className={isActive}
            data-message={method}
            onClick={this.handleClick} >
            {method}
          </a>
        )
      }
    );

    return(
      <div className="menu">
        <p className="menu-label">Methods</p>
        <ul className="menu-list">
          {methodList}
        </ul>
      </div>
    );
  }
}

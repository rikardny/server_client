import React, { Component } from 'react';

export class Methods extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // Render:
  render() {
    let availableMethods = Object.keys(this.props.methods);
    let activeMethods = Object.values(this.props.methods);

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
            onClick={this.props.changeMethods} >
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

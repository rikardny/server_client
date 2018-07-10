import React, { Component } from 'react';

export class Methods extends Component {

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
          <a key={i}
            className={"is-size-4 fa-bold " + isActive} // Textsize, 7-1
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

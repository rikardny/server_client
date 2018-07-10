import React, { Component } from 'react';

export class Models extends Component {

  // Render:
  render() {
    let availableModels = Object.keys(this.props.models);
    let activeModels = Object.values(this.props.models);

    let modelList = availableModels.map(
      (model, i) => {
        let isActive = "";

        if(activeModels[i]) {
          isActive = "is-active";
        };

        return(
          <a key={i}
            className={"is-size-4 fa-bold " + isActive} // Textsize, 7-1
            data-message={model}
            onClick={this.props.changeModels} >
            {model}
          </a>
        )
      }
    );

    return(
      <div className="menu">
        <p className="menu-label">Models</p>
        <ul className="menu-list">
          {modelList}
        </ul>
      </div>
    );
  }
}

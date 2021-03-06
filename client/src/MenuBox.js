import React, { Component } from 'react';
import { JSMEeditor } from './JSMEeditor';
import { Models } from './Models';

export class MenuBox extends Component {
  // Render:
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="tile is-ancestor">

            <div className="tile is-parent is-8">
              <div className="tile is-child">
                <JSMEeditor />
              </div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child">
                <Models
                  models={this.props.models}
                  changeModels={this.props.changeModels}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

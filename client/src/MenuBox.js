import React, { Component } from 'react';
import { JSMEeditor } from './JSMEeditor';
import { Methods } from './Methods';

export class MenuBox extends Component {
  // Render:
  render() {
    return (
      <div className="section">
        <div className="container box" >
          <div className="tile is-ancestor">

            <div className="tile is-parent is-8">
              <div className="tile is-child">
                <JSMEeditor className="content"/>
              </div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child">
                <Methods className="content"
                  methods={this.props.methods}
                  changeMethods={this.props.changeMethods}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { JSMEeditor } from './JSMEeditor';
import { Methods } from './Methods';

export class MenuBox extends Component {
  render() {
    return (
      <div className="container" >
        <div className="tile is-ancestor">

          <div className="tile is-parent is-9">
            <div className="tile is-child">
              <JSMEeditor className="content"/>
              </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child box">
              <Methods className="content" onChange={this.props.onChange} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

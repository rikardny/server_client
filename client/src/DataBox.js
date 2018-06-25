import React, { Component } from 'react';
import { PredictionImage } from './PredictionImage';
import { PredictionStats } from './PredictionStats';

export class DataBox extends Component {
  render() {
    return (
      <div className="container" >
        <div className="tile is-ancestor">

          <div className="tile is-parent is-5">
            <div className="tile is-child">
              <p className="title" >This will render image from API</p>
              <PredictionImage smiles={this.props.smiles} />
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <p className="title" >This will show prediction data from API:</p>
              <PredictionStats smiles={this.props.smiles} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

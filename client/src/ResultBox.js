import React, { Component } from 'react';
import { PredictionImage } from './PredictionImage';
import { PredictionStats } from './PredictionStats';

export class ResultBox extends Component {
  // Render:
  render() {
    return (
      <div className="container notification">
        <p className="title" >{this.props.model}</p>
        <div className="tile is-ancestor">

          <div className="tile is-parent is-3">
            <div className="tile is-child">
              <PredictionImage smiles={this.props.smiles} />
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <p className="subtitle" >Prediction data:</p>
              <PredictionStats smiles={this.props.smiles} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

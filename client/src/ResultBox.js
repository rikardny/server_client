
import React, { Component } from 'react';
import { PredictionImage } from './PredictionImage';
import { PredictionStats } from './PredictionStats';

export class ResultBox extends Component {
  // Render:
  render() {
    let colors = ["is-primary", "is-secondary", "is-danger", "is-dark", "is-warning"];
    let rand = Math.floor((Math.random() * 5) + 1)

    let color = colors[rand];

    return (
      <div className={"container notification " + color}>
        <div className="tile is-ancestor">

          <div className="tile is-parent is-3">
            <div className="tile is-child">
              <p className="title" >{this.props.method}</p>
              <PredictionImage />
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <p className="subtitle" >Prediction data:</p>
              <PredictionStats />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

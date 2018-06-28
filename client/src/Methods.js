import React, { Component } from 'react';

export class Methods extends Component {
  render() {
    return(
      <div>
        <button className="button is-warning is-large" onClick={this.props.onChange}>Metpred</button>
      </div>
    );
  }
}

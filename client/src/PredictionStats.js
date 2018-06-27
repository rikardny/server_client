import React, { Component } from 'react';

export class PredictionStats extends Component {
  state = { stats:['rikard', 'lisa', 'henrik'] }

  // Lifecycle Methods:
  componentDidMount() {
    this.getPredictionStats()
      .then( body => this.setState({ stats: body }) )
  }

  // Functions:
  async getPredictionStats() {
    const response = await fetch('/api/users');
    const body = await response.json();
    return body;
  }

//<textarea className="textarea" readOnly value={this.state.stats} rows="26"></textarea>
//<p>{this.props.smiles}</p>
  // Render:
  render() {
    return (
      <div>
        {this.state.stats.map((entry, i) => <li key={i}> {entry.id} --> {entry.name}</li>)}
      </div>
    )
  }
}

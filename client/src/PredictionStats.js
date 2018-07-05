import React, { Component } from 'react';

export class PredictionStats extends Component {
  state = { stats: [] }

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

  // Render:
  render() {
    return (
      <article className="message is-dark">
        <div className="message-body">
          {this.state.stats.map((entry, i) => <li key={i}> {entry.id} --> {entry.name}</li>)}
        </div>
      </article>
    )
  }
}

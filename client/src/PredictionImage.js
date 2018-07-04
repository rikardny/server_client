import React, { Component } from 'react';

export class PredictionImage extends Component {
  state = { url: '' }

  // Lifecycle Methods:
  componentDidMount() {
    this.getPredictionImage()
      .then( res => this.setState({ url: res }));
  }

  // Functions:
  async getPredictionImage() {
    const response = await fetch('/api/photos');
    const body = await response.json();
    let rand = Math.floor((Math.random() * 5000) + 1); // Extra flare!!!
    return body[rand].url;
  }

  // Render:
  render() {
    return (
      <div>
        <img src={this.state.url} alt='molecule' width='100%'/>
      </div>
    )
  }
}

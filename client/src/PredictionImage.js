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
    return body[12].url;
  }

  // Render:
  render() {
    return (
      <div>
        <div>
          <p>{this.props.smiles}</p>
        </div>
        <img src={this.state.url} alt='molecule' width='100%'/>
      </div>
    )
  }
}

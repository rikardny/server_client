import React, { Component } from 'react';

export class PredictionImage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '', smiles: this.props.smiles };
    this.getPredictionImage = this.getPredictionImage.bind(this);
  }

  // Lifecycle Methods:
  componentDidMount() {
    console.log(this.props.smiles);
    this.getPredictionImage()
      .then( body => this.setState({ data: body }));
  }

  // Functions:
  async getPredictionImage() {
    const response = await fetch('/metpred/predictionImage?smiles=' + this.state.smiles);
    const responseText = await response.text();
    const body = <span dangerouslySetInnerHTML={{__html: responseText }} />
    return body;
  }

  handleClick() {
    this.getPredictionImage().then( body => this.setState({ data: body }));
  }

  // Render:
  render() {
    return (
      <div>
        <p><button onClick={this.handleClick.bind(this)} /></p>
        <p>{this.props.smiles}</p>
        <p>{this.state.data}</p>
      </div>
    )
  }
}

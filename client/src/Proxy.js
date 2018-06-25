import React, { Component } from 'react';

export class Proxy extends Component {
  state = {
    response: "No changes"
  };

  // Lifecycle Methods:
  componentDidMount() {
    this.callApiMetpred()
      .then( res => this.setState({ response: res }))
  }


  // Functions:
  async callApiMetpred() {
    const response = await fetch('/api/metpred');
    const body = await response.text();
    return body;
  };



  // Render:
  render() {
    return (
      <div className="section">
        <div>{this.state.response}</div>
      </div>
    );
  }
}


/*

this.callApiMetpred().then((response) => this.setState({test: data}))
this.callApiMetpred().then(res => this.setState({response: res}))

callApiHello = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
}
*/

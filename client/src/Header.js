import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              PredGUI Project
            </h1>
            <h2 className="subtitle">
              Built w/ React.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

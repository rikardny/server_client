import React, { Component } from 'react';
import { ResultBox } from './ResultBox';

export class ResultList extends Component {
  // Render:
  render() {

    let methods = Object.keys(this.props.methods);
    let activeMethods = Object.values(this.props.methods);

    let listResults = methods.map(
      (method, i) => {
        let listItem;

        if (activeMethods[i]) {
          listItem = (
            <div key={i}>
              <ResultBox method={method}/>
            </div>
          );
        }

        return listItem;
      }
    )

    return(
      <div>
        {listResults}
      </div>
    )
  }
}

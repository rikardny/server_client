import React, { Component } from 'react';
import { ResultBox } from './ResultBox';

export class ResultList extends Component {
  // Render:
  render() {

    let models = Object.keys(this.props.models);
    let activeModels = Object.values(this.props.models);

    let boxStyling = { padding: '1rem' }; // Distance between resultboxes

    let listResults = models.map(
      (model, i) => {
        let listItem;

        if (activeModels[i]) {
          listItem = (
            <div className="section" style={boxStyling} key={i}>
              <ResultBox model={model}/>
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

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

/*import { Header } from './Header';
import { Proxy } from './Proxy';
import { MenuBox } from './MenuBox';
import { DataBox } from './DataBox';
*/

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

registerServiceWorker();

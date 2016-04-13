import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressbarBox from './Components/ProgressbarBox.jsx';

class App extends React.Component{
  render () {
    return (
      <body>
        <div className="row">
          <div className="container well">
            <h2> Progressbars  </h2>
            <ProgressbarBox />
          </div>
        </div>
      </body>
    );
  }
}

render(<App />, document.getElementById('app'));

import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressbarBox from './Components/ProgressbarBox.jsx';

class App extends React.Component{

  render () {
    return (
      <div className="row">
        <div className="container">
          <h2> Progressbars  </h2>
          <ProgressbarBox />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

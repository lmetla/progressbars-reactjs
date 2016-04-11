import React, {PropTypes} from 'react';
import {render} from 'react-dom';

const propTypes = {
	id: PropTypes.number,
	value: PropTypes.number
};

class Progressbar extends React.Component {

  render () {
    return (
      <div className="row">
        <div className="container">
          <div
            className="progress"
            ref={this.props.data.id}
            id={this.props.data.id}>
            <div
              className="progress-bar progress-bar-striped active"         role="progressbar"
              aria-valuenow= {this.props.data.value}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: this.props.data.value +"%"}}>
              <span>{this.props.data.value}% Complete</span>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

Progressbar.propTypes = propTypes;

export default Progressbar;

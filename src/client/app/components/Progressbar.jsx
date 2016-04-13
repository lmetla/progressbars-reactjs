import React, {PropTypes} from 'react';
import {render} from 'react-dom';

const propTypes = {
  id: PropTypes.number,
  percent: PropTypes.number
};

class Progressbar extends React.Component {
  handleProps(props) {
    this.setState({
      percent: props.data.percent + 10,
      id: props.data.id
    });
    console.log(this);
    this.interval = setInterval(this.autoIncrement.bind(this), 1000);
  }

  autoIncrement() {
    var percent = this.state.percent + 10;
    if(percent <= 100) {
      this.setState({
        percent: percent,
        id: this.state.id
      });
    }
    else
      clearInterval(this.interval);
  }

  constructor(props) {
    super(props);
    this.state = ({percent: 0,id: 0});
  }

  componentDidMount() {
    this.handleProps(this.props);
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <div
            className="progress"
            ref={this.state.id}
            id={this.state.id}>
            <div
              className="progress-bar progress-bar-success active"        role="progressbar"
              aria-valuenow= {this.state.percent}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: this.state.percent +"%"}}>
              <span>{this.state.percent}% Complete</span>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

Progressbar.propTypes = propTypes;

export default Progressbar;

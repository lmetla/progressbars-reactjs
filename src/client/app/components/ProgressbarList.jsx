import React from 'react';
import Progressbar from './Progressbar.jsx';

class ProgressbarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({data:props.data});
  }
  render() {
    return (
      <div className = "row">
        <div className= "container">
          {this.state.data.map((progressbar) => (
            <Progressbar data={progressbar} key={progressbar.id}>
            </Progressbar>
          ))}
        </div>
      </div>
    );
  }
}

export default ProgressbarList;

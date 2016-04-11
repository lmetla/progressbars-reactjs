import React,	{ PropTypes } from 'react';
import ProgressbarList from './ProgressbarList.jsx';

var data = [];

class ProgressbarBox extends React.Component {
	constructor(props) {
		super(props);
		console.log("constructor");
		this.state = { data:[]};
	}

	componentDidMount() {
		console.log("Did mount");
		console.log(this.state.data);
		// Initialize the data list
		var data = [
			{
				id: 1,
				value: 70
			},
			{
				id: 2,
				value: 40
			},
			{
				id: 3,
				value: 20
			}
		];
	 	this.setState({data: this.state.data.concat(data)});
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<ProgressbarList data={this.state.data} />
			</div>
		);
  }
}

export default ProgressbarBox;

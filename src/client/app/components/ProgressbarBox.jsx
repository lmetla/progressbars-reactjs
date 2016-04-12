import React,	{ PropTypes } from 'react';
import ProgressbarList from './ProgressbarList.jsx';

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
				percent: 10
			},
			{
				id: 2,
				percent: 20
			},
			{
				id: 3,
				percent: 30
			},

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

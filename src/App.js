import React from 'react';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			a: "zxczxcvvzxcv",
		};
	}

	componentDidMount() {
		console.log('11asasdfdf212');
	}


	render() {
		return (
			<div>
				<p>{this.state.a}</p>
				<p>{this.state.b}</p>
			</div>
		);
	}
}

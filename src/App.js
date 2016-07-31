import React from 'react';
require('babel-polyfill');

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			a: 1233216,
		};
	}

	async componentDidMount() {
		await this.sleep(1000);
		console.log(211);
	}

	sleep (time) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, time);
		})
	};


	render() {
		return (
			<div>
				<p>{this.state.a}</p>
			</div>
		);
	}
}

import React from "react";

class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment() {
		this.state.count({ count: this.state.count + 1 });
	}

	decrement() {
		this.state.count({ count: this.state.count - 1 });
	}
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>

				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}

export default ClassComponent;

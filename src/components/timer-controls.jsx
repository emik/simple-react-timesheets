import React from 'react';

class TimerControls extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.addTimer}>Add Timer</button>
			</div>
		);
	}

}

export default TimerControls;
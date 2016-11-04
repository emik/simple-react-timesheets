import React from 'react';
import Timer from './timer.jsx';
import TimerControls from './timer-controls.jsx';
import TimerTotals from './timer-totals.jsx';

class TimerHolder extends React.Component {

	constructor() {
		super();
		this.addTimer = this.addTimer.bind(this);
		this.state = {
			timers: []
		};
	}

	render() {
		return (
			<div>
				<div>
					this.state.timers.map(() => return "<Timer />")
				<div>
				<TimerControls addTimer={() => this.addTimer()} />
				<TimerTotals />
			</div>
		);
	}

	addTimer() {
		var rawr = this.state.timers.push(timers.length);
		this.setState({timers: rawr});
	}
}

export default TimerHolder;
import React from 'react';
import Timer from './timer.jsx';
import TimerControls from './timer-controls.jsx';
import TimerTotals from './timer-totals.jsx';

class TimerHolder extends React.Component {

	constructor(props) {
		super(props);
		this.addTimer = this.addTimer.bind(this);
		this.state = {
			timers: []
		};
	}

	render() {
		return (
			<div>
				<div>
					{this.state.timers.map(()=><Timer />);}
				</div>
				<TimerControls addTimer={this.addTimer.bind(this)} />
				<TimerTotals />
			</div>
		);
	}

	addTimer() {
		let newTimers = this.state.timers;
		newTimers.push(this.state.timers.length);
		this.setState({timers: newTimers});
	}
}

export default TimerHolder;
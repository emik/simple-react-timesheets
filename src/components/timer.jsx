import React from 'react';
import Tock from 'tocktimer';

class Timer extends React.Component {

	render() {
		return (
			<div>
				<div>{this.state.time}</div>
				<button onClick={() => this.toggleTimer()}>{this.state.buttonText}</button>
			</div>
		);
	}

	updateTimer() {
		var timer = this.state.tock;
		this.setState({time: timer.msToTimecode(timer.lap())})
	}

	constructor() {
		super();
		this.toggleTimer = this.toggleTimer.bind(this);
		this.updateTimer = this.updateTimer.bind(this);
		this.state = {
			time: 0,
			tock: new Tock({
				callback: this.updateTimer
			}),
			timerRunning: false,
			buttonText: 'Start',
			hasPreviouslyStarted: false
		};
	}

	toggleTimer() {
		if(!this.state.timerRunning) {
			if(this.state.hasPreviouslyStarted) {
				this.state.tock.pause(); // unpauses
			}else {
				this.state.tock.start();
			}
		}else {
			this.state.tock.pause();
		}
		this.setState({
			buttonText: this.state.timerRunning ? 'Start' : 'Stop',
			timerRunning: !this.state.timerRunning,
			hasPreviouslyStarted: true
		});
	}

}

export default Timer;
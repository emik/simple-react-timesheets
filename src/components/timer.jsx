import React from 'react';
import Tock from 'tocktimer';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.toggleTimer = this.toggleTimer.bind(this);
		this.updateTimer = this.updateTimer.bind(this);
		this._removeTimer = this._removeTimer.bind(this);
		this.state = {
			time: "00:00:00",
			tock: new Tock({
				callback: this.updateTimer
			}),
			timerRunning: false,
			buttonText: 'Start',
			hasPreviouslyStarted: false
		};
	}

	render() {
		return (
			<div>
				<div onClick={this.props.showTimerEditModal(this.state.time)}>{this.state.time}</div>
				<button onClick={this.toggleTimer}>{this.state.buttonText}</button>
				<button onClick={this.showTimeEditor}>Edit</button>
				<button onClick={this._removeTimer}>Remove Timer</button>
			</div>
		);
	}

	_removeTimer() {
		this.props.removeTimer(this.props.itemID);
	}

	showTimeEditor() {

	}

	updateTimer() {
		var timer = this.state.tock;
		this.setState({time: timer.msToTimecode(timer.lap())})
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

	ensureTimerRunning() {

	}

	ensureTimerNotRunning() {

	}

}

export default Timer;
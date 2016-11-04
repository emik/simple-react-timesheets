import React from 'react';
import Timer from './timer.jsx';
import TimerControls from './timer-controls.jsx';
import TimerTotals from './timer-totals.jsx';
import TimerEditModal from './timer-edit-modal.jsx';

class TimerHolder extends React.Component {

	constructor(props) {
		super(props);
		this.addTimer = this.addTimer.bind(this);
		this.showTimerEditModal = this.showTimerEditModal.bind(this);
		this.removeTimer = this.removeTimer.bind(this);
		this.state = {
			timers: [0],
			timerCurIndex : 0,
			editingTimer: false
		};
	}

	render() {
		let timerComponents = this.state.timers.map(
			(val, key) => {
				return (
					<Timer 
						showTimerEditModal={this.showTimerEditModal} 
						removeTimer={this.removeTimer} 
						key={key.toString()} 
						itemID={key.toString()} 
					/>
				);
			}
		);
		let timerEditModal = this.state.editingTimer ? <TimerEditModal  /> : '';
		return (
			<div>
				<div>
					{timerComponents}
				</div>
				<TimerControls addTimer={this.addTimer} />
				<TimerTotals />
				{timerEditModal}
			</div>
		);
	}

	addTimer() {
		let newTimers = this.state.timers;
		newTimers[this.state.timerCurIndex] = this.state.timerCurIndex;
		this.setState({
			timers: newTimers,
			timerCurIndex: this.state.timerCurIndex + 1
		});
	}

	removeTimer(timerKey) {
		if(confirm("Are you sure you want to delete this?")) {
			let newTimers = this.state.timers;
			delete newTimers[timerKey];
			this.setState({timers: newTimers});
		}
	}

	showTimerEditModal(time) {
		
	}
}

export default TimerHolder;
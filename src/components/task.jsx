import React from 'react';
import Tock from 'tocktimer';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTimer = this.toggleTimer.bind(this);
        this._updateTimeInner = this._updateTimeInner.bind(this);
        this._removeTaskInner = this._removeTaskInner.bind(this);
        this._setActiveTaskInner = this._setActiveTaskInner.bind(this);
        this._setInactiveTaskInner = this._setInactiveTaskInner.bind(this);
        this._showTaskEditor = this._showTaskEditor.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.startTock = this.startTock.bind(this);
        this.state = Object.assign({
                tock: new Tock({
                    callback: this._updateTimeInner,
                    interval: 1000
                })
            },
            this.constructTimerState(this.props.active)
        );

        if(this.props.active) {
            this.startTock();
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.description}</h2>
                <div>{this.props.time}</div>
                <button onClick={this.toggleTimer}>{this.state.buttonText}</button>
                <button onClick={this._showTaskEditor}>Edit</button>
                <button onClick={this._removeTaskInner}>Remove Task</button>
            </div>
        );
    }

    _removeTaskInner() {
        this.props._removeTask(this.props.itemID);
    }

    _showTaskEditor() {
        this.stopTimer();
        this.props.showTaskEditor(this.props.itemID);
    }

    _updateTimeInner() {
        let tockObj = this.state.tock;
        let newTime = tockObj.msToTimecode(tockObj.lap());
        this.props._updateTime(this.props.itemID, newTime);
    }

    _setActiveTaskInner() {
        this.props._setActiveTask(this.props.itemID);
    }

    _setInactiveTaskInner() {
        this.props._setInactiveTask(this.props.itemID);
    }

    toggleTimer() {
        if(!this.state.timerRunning) {
            this.startTimer()
        }else {
            this.stopTimer();
        }
    }

    startTock() {
        this.state.tock.start(this.props.time);
    }

    startTimer() {
        this.startTock();
        this.setState(this.constructTimerState(true));
    }

    stopTimer() {
        // needs check for safety cos .pause can unpause
        if(this.state.timerRunning) {
            this.state.tock.pause();
        }
        this.setState(this.constructTimerState(false));
    }

    // necessary for injection into initial constructor state before component is mounted
    constructTimerState(timerIsOn) {
        return {
            buttonText: timerIsOn ? 'Stop' : 'Start',
            timerRunning: timerIsOn
        };
    }

}

export default Task;
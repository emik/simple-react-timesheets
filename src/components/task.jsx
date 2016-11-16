import React from 'react';
import Tock from 'tocktimer';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this._updateTimeInner = this._updateTimeInner.bind(this);
        this._removeTaskInner = this._removeTaskInner.bind(this);
        this._showTaskEditor = this._showTaskEditor.bind(this);
        this.state = {
            tock: new Tock({
                callback: this._updateTimeInner,
                interval: 1000
            }),
            timerRunning: false,
            buttonText: 'Start',
            hasPreviouslyStarted: false
        };
    }

    render() {
        return (
            <div>
                <h2>{this.props.description}</h2>
                <div>{this.props.time}</div>
                <button onClick={this.toggleTask}>{this.state.buttonText}</button>
                <button onClick={this._showTaskEditor}>Edit</button>
                <button onClick={this._removeTaskInner}>Remove Task</button>
            </div>
        );
    }

    _removeTaskInner() {
        this.props._removeTask(this.props.itemID);
    }

    _showTaskEditor() {
        this.ensureTimerNotRunning();
        this.props.showTaskEditor(this.props.itemID);
    }

    _updateTimeInner() {
        let task = this.state.tock;
        let newTime = task.msToTimecode(task.lap());
        this.props._updateTime(this.props.itemID, newTime);
    }

    toggleTask() {
        if(!this.state.timerRunning) {
            this.state.tock.start(this.props.time);
        }else {
            this.state.tock.pause(); // can unpause so be careful with this method
        }
        this.setState({
            buttonText: this.state.timerRunning ? 'Start' : 'Stop',
            timerRunning: !this.state.timerRunning,
            hasPreviouslyStarted: true
        });
    }

    ensureTimerRunning() {

    }

    // TODO
    ensureTimerNotRunning() {

    }

}

export default Task;
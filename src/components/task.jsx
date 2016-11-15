import React from 'react';
import Tock from 'tocktimer';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.updateVisualTime = this.updateVisualTime.bind(this);
        this._removeTaskInner = this._removeTaskInner.bind(this);
        this.state = {
            time: this.props.time,
            tock: new Tock({
                callback: this.updateVisualTime
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
                <div onClick={this.props.showTaskEditModal(this.state.time)}>{this.state.time}</div>
                <button onClick={this.toggleTask}>{this.state.buttonText}</button>
                <button onClick={this.showTaskEditor}>Edit</button>
                <button onClick={this._removeTaskInner}>Remove Task</button>
            </div>
        );
    }

    _removeTaskInner() {
        this.props._removeTask(this.props.itemID);
    }

    showTaskEditor() {

    }

    updateVisualTime() {
        var task = this.state.tock;
        this.setState({time: task.msToTimecode(task.lap())})
    }


    toggleTask() {
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

    ensureTaskRunning() {

    }

    ensureTaskNotRunning() {

    }

}

export default Task;
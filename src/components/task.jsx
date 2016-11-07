import React from 'react';
import Tock from 'tocktimer';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this._removeTask = this._removeTask.bind(this);
        this.state = {
            time: "00:00:00",
            tock: new Tock({
                callback: this.updateTask
            }),
            timerRunning: false,
            buttonText: 'Start',
            hasPreviouslyStarted: false
        };
    }

    render() {
        return (
            <div>
                <div onClick={this.props.showTaskEditModal(this.state.time)}>{this.state.time}</div>
                <button onClick={this.toggleTask}>{this.state.buttonText}</button>
                <button onClick={this.showTaskEditor}>Edit</button>
                <button onClick={this._removeTask}>Remove Task</button>
            </div>
        );
    }

    _removeTask() {
        this.props.removeTask(this.props.itemID);
    }

    showTaskEditor() {

    }

    updateTask() {
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
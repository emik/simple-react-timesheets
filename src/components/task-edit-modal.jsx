import React from 'react';

class TaskEditModal extends React.Component {

    constructor(props) {
        super(props);
        this._applyEditsInner = this._applyEditsInner.bind(this);
        this._handleDescriptionChangeInner = this._handleDescriptionChangeInner.bind(this);
        this._handleTimeChangeInner = this._handleTimeChangeInner.bind(this);
        this.state = {
            taskKey: null
        };
    }

    componentWillReceiveProps(props) {
        console.log(props);
        // if(props.currentEditingTask.taskKey != this.state.taskKey) {
            setTimeout(()=>{
                if(props.selectInput == 'description') {
                    this.descriptionInput.focus();
                }else if(props.selectInput == 'time') {
                    this.timeInput.focus();
                }
                props.inputFocusFinished();
            }, 1);
            // set timeout super hacky fix to avoid timing issue when the timer is running and showing edit box
        // }
    }


    render() {
        return (
            <form onSubmit={this._applyEditsInner}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input ref={(input) => this.descriptionInput = input} type="text" name="description" id="description" value={this.props.currentEditingTask.description} onChange={this._handleDescriptionChangeInner} />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input ref={(input) => this.timeInput = input} type="text" name="time" id="time" value={this.props.currentEditingTask.time} onChange={this._handleTimeChangeInner} />
                </div>
                <button>Apply</button>
                <button onClick={this.props.hideTaskEditor}>Close</button>
            </form>
        );
    }

    _handleDescriptionChangeInner(event) {
        this.setState({
            description: event.target.value
        });
    }

    _handleTimeChangeInner(event) {
        this.props.handleTimeChange(event.target.value);
    }

    _handleDescriptionChangeInner(event) {
        this.props.handleDescriptionChange(event.target.value);
    }

    _applyEditsInner(event) {
        event.preventDefault();
        this.props._applyEdits();
    }
}

export default TaskEditModal;
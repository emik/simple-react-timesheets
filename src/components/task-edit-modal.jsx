import React from 'react';

class TaskEditModal extends React.Component {

    constructor(props) {
        super(props);
        this._applyEditsInner = this._applyEditsInner.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.state = {
            taskKey: null
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            description: props.currentEditingTask.description,
            time: props.currentEditingTask.time,
            taskKey: props.taskKey
        });
        if(props.selectInput == 'description') {
            this.descriptionInput.focus();
        }else if(props.selectInput == 'time') {
            this.timeInput.focus();
        }
    }


    render() {
        return (
            <form onSubmit={this._applyEditsInner}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input ref={(input) => this.descriptionInput = input} type="text" name="description" id="description" value={this.state.description} onChange={this.handleDescriptionChange} />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input ref={(input) => this.timeInput = input} type="text" name="time" id="time" value={this.state.time} onChange={this.handleTimeChange} />
                </div>
                <button>Apply</button>
                <button onClick={this.props.hideTaskEditor}>Close</button>
            </form>
        );
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleTimeChange(event) {
        this.setState({
            time: event.target.value
        });
    }

    _applyEditsInner(event) {
        event.preventDefault();
        console.log("FORM SUBMIT");
        let editedTask = Object.assign({}, this.props.currentEditingTask, {
            description: this.state.description,
            time: this.state.time
        });
        this.props._applyEdits(editedTask);
    }
}

export default TaskEditModal;
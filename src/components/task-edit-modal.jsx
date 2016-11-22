import React from 'react';

class TaskEditModal extends React.Component {

    constructor(props) {
        super(props);
        this._applyEditsInner = this._applyEditsInner.bind(this);
        this._handleDescriptionChangeInner = this._handleDescriptionChangeInner.bind(this);
        this._handleTimeChangeInner = this._handleTimeChangeInner.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.state = {
            taskKey: null
        };
    }

    componentDidUpdate() {
        if(this.props.selectInput && this.props.isVisible) {
            this.focusInput();
        }
    }

    focusInput() {
        if(this.props.selectInput == 'description') {
            this.descriptionInput.focus();
        }else if(this.props.selectInput == 'time') {
            this.timeInput.focus()
        }
        this.props.inputFocusFinished();
    }

    render() {
        let description = "";
        let time = "";
        if(this.props.currentEditingTask) {
            description = this.props.currentEditingTask.description;
            time = this.props.currentEditingTask.time;
        }
        return (
            <form className={this.props.isVisible ? 'task-edit-box' : 'hidden'} onSubmit={this._applyEditsInner}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input ref={(input) => this.descriptionInput = input} type="text" name="description" id="description" value={description} onChange={this._handleDescriptionChangeInner} />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input ref={(input) => this.timeInput = input} type="text" name="time" id="time" value={time} onChange={this._handleTimeChangeInner} />
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

        // validation
        if(!this.isValidDescription(this.props.currentEditingTask.description)) {
            alert('description needs to be filled');
            return false;
        }
        if(!this.isValidTime(this.props.currentEditingTask.time)) {
            alert('time needs to be filled');
            return false;
        }
        this.props._applyEdits();
    }

    isValidDescription(description) {
        return typeof description === 'string' && description.length > 0; 
    }

    isValidTime(time) {
        if(typeof time !== 'string' || !time) {
            return false;
        }
        let timeMatch = time.match(/[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/);
        return typeof timeMatch === 'object' && timeMatch.length === 1 && time.length === 8;
    }
}

export default TaskEditModal;
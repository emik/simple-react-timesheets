import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask, removeTask, editTask, updateTime, setActiveTask, setInactiveTask } from '../actions/index.jsx';

import Task from '../components/task.jsx';
import TaskControls from '../components/task-controls.jsx';
import TaskTotals from '../components/task-totals.jsx';
import TaskEditModal from '../components/task-edit-modal.jsx';

class TaskHolder extends React.Component {

    constructor(props) {
        super(props);
        this._addTask = this._addTask.bind(this);
        this._removeTask = this._removeTask.bind(this);
        this._applyEdits = this._applyEdits.bind(this);
        this._updateTime = this._updateTime.bind(this);
        this._setActiveTask = this._setActiveTask.bind(this);
        this._setInactiveTask = this._setInactiveTask.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.renderTaskEditor = this.renderTaskEditor.bind(this);
        this.showTaskEditor = this.showTaskEditor.bind(this);
        this.hideTaskEditor = this.hideTaskEditor.bind(this);
        this.state = {
            editingTask: false
        };
    }

    renderTasks() {
        return this.props.tasks.map(
            (task) => {
                return (
                    <Task 
                        _removeTask={this._removeTask} 
                        _updateTime={this._updateTime}
                        description={task.description}
                        showTaskEditor={this.showTaskEditor}
                        time={task.time}
                        key={task.key}
                        itemID={task.key}
                        active={task.active}
                        _setActiveTask={this._setActiveTask}
                        _setInactiveTask={this._setInactiveTask}
                    />
                );
            }
        );
    }

    render() {
        let taskEditModal = this.state.editingTask ? this.renderTaskEditor() : '';
        return (
            <div>
                <div>
                    {this.renderTasks()}
                </div>
                <TaskControls _addTask={this._addTask} />
                <TaskTotals />
                {taskEditModal}
            </div>
        );
    }

    getEmptyTask() {
        return { description: '', time: '' };
    }

    _addTask() {
        this.props.addTask();
    }

    _removeTask(taskKey) {
        if(confirm("Are you sure you want to delete this?")) {
            this.props.removeTask(taskKey);
        }
    }

    showTaskEditor(taskKey) {
        let filteredTaskArr = this.props.tasks.filter(task => task.key == taskKey);
        if(filteredTaskArr.length === 0) {
            alert("The task no longer exists."); // shouldn't be hit
        }
        this.setState({
            editingTask: true,
            currentEditingTask: filteredTaskArr[0]
        });
    }

    hideTaskEditor(event) {
        event.preventDefault();
        this.setState({editingTask: false, currentEditingTask: null});
    }

    renderTaskEditor() {
        return (
            <TaskEditModal _applyEdits={this._applyEdits} currentEditingTask={this.state.currentEditingTask} hideTaskEditor={this.hideTaskEditor}  />
        );
    }

    _applyEdits(editedTask) {
        this.props.editTask(editedTask);
    }

    _updateTime(taskKey, newTime) {
        this.props.updateTime(taskKey, newTime);
    }

    _setActiveTask(taskKey) {
        this.props.setActiveTask(taskKey);
    }

    _setInactiveTask(taskKey) {
        this.props.setInactiveTask(taskKey);
    }
}

const mapStateToProps = (state) => {
    // whatever is returned will show up as props inside of taskholder
    return {
        tasks: state.tasks
    };
}
// anything returned from this function will end up as props on the TaskHolder container
const mapDispatchToProps = (dispatch) => {
    // whenever addTask is called, result should be passed to all reducers
    return bindActionCreators({ addTask, removeTask, editTask, updateTime, setActiveTask, setInactiveTask }, dispatch);
}

// promote TaskHolder to a container - needs to know about dispatch method, addTask - make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(TaskHolder);
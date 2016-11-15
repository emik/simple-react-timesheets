import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask, removeTask } from '../actions/index.jsx';

import Task from '../components/task.jsx';
import TaskControls from '../components/task-controls.jsx';
import TaskTotals from '../components/task-totals.jsx';
import TaskEditModal from '../components/task-edit-modal.jsx';


class TaskHolder extends React.Component {

    constructor(props) {
        super(props);
        this._addTask = this._addTask.bind(this);
        this.showTaskEditModal = this.showTaskEditModal.bind(this);
        this._removeTask = this._removeTask.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.state = {
            tasks: [0],
            taskCurIndex : 0,
            editingTask: false
        };
    }

    renderTasks() {
        return this.props.tasks.map(
            (task) => {
                return (
                    <Task 
                        showTaskEditModal={this.showTaskEditModal} 
                        _removeTask={this._removeTask} 
                        description={task.description}
                        time={task.time}
                        key={task.key}
                        itemID={task.key}
                    />
                );
            }
        );
    }

    render() {
        let taskEditModal = this.state.editingTask ? <TaskEditModal  /> : '';
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

    showTaskEditModal(time) {
        
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
    return bindActionCreators({ addTask, removeTask }, dispatch);
}

// promote TaskHolder to a container - needs to know about dispatch method, addTask - make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(TaskHolder);
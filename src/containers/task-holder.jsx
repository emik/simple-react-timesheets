import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import addTaskAction from '../actions/index.jsx';

import Task from '../components/task.jsx';
import TaskControls from '../components/task-controls.jsx';
import TaskTotals from '../components/task-totals.jsx';
import TaskEditModal from '../components/task-edit-modal.jsx';


class TaskHolder extends React.Component {

    constructor(props) {
        super(props);
        this.addTaskEvent = this.addTaskEvent.bind(this);
        this.showTaskEditModal = this.showTaskEditModal.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.state = {
            tasks: [0],
            taskCurIndex : 0,
            editingTask: false
        };
    }

    renderTasks() {
        return this.props.tasks.map(
            (val, key) => {
                return (
                    <Task 
                        showTaskEditModal={this.showTaskEditModal} 
                        removeTask={this.removeTask} 
                        key={key.toString()} 
                        itemID={key.toString()} 
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
                <TaskControls addTaskEvent={this.addTaskEvent} />
                <TaskTotals />
                {taskEditModal}
            </div>
        );
    }

    addTaskEvent() {
        addTask
        // let newTasks = this.state.tasks;
        // newTasks[this.state.taskCurIndex] = this.state.taskCurIndex;
        // this.setState({
        //     tasks: newTasks,
        //     taskCurIndex: this.state.taskCurIndex + 1
        // });
    }

    removeTask(taskKey) {
        if(confirm("Are you sure you want to delete this?")) {
            let newTasks = this.state.tasks;
            delete newTasks[taskKey];
            this.setState({tasks: newTasks});
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
    return bindActionCreators({ addTask: addTask }, dispatch);
}

// promote TaskHolder to a container - needs to know about dispatch method, addTask - make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(TaskHolder);
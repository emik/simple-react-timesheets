import React from 'react';
import { connect } from 'react-redux';

import Task from './task.jsx';
import TaskControls from './task-controls.jsx';
import TaskTotals from './task-totals.jsx';
import TaskEditModal from './task-edit-modal.jsx';


class TaskHolder extends React.Component {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
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
                <TaskControls addTask={this.addTask} />
                <TaskTotals />
                {taskEditModal}
            </div>
        );
    }

    addTask() {
        let newTasks = this.state.tasks;
        newTasks[this.state.taskCurIndex] = this.state.taskCurIndex;
        this.setState({
            tasks: newTasks,
            taskCurIndex: this.state.taskCurIndex + 1
        });
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

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of taskholder
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TaskHolder);
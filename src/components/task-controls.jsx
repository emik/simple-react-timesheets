import React from 'react';

class TaskControls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props._addTask}>Add Task</button>
            </div>
        );
    }

}

export default TaskControls;
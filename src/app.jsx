require("./scss/style.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/task-list.jsx';

ReactDOM.render(
    <div>
        <TaskList />
    </div>,
    document.getElementById('root')
);
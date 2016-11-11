require("./scss/style.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import TaskHolder from './containers/task-holder.jsx';
import RootReducer from './reducers/index.jsx'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <TaskHolder />
    </Provider>,
    document.getElementById('root')
);
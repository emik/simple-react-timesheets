import { combineReducers } from 'redux';
import TasksReducer from './reducer-tasks.jsx';

const RootReducer = combineReducers({
    tasks: TasksReducer
});

export default RootReducer;
import { ADD_TASK, REMOVE_TASK } from '../reducers/reducer-tasks.jsx';

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    };
}

export function removeTask(taskKey) {
    return {
        type: REMOVE_TASK,
        taskKey: taskKey
    };
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

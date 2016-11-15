import { ADD_TASK, REMOVE_TASK, EDIT_TASK, UPDATE_TIME } from '../reducers/reducer-tasks.jsx';

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

export function editTask(editedTask) {
    return {
        type: EDIT_TASK,
        editedTask: editedTask
    };
}

export function updateTime(taskKey, newTime) {
    return {
        type: UPDATE_TIME,
        taskKey: taskKey,
        newTime: newTime
    };
}
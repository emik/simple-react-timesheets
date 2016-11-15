let nextTaskId = 0
export function addTask(task) {
    return {
        type: 'ADD_TASK',
        // id: nextTaskId++,
        payload: task
    };
}

export function removeTask(taskKey) {
    return {
        type: 'REMOVE_TASK',
        taskKey: taskKey
    };
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

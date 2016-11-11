let nextTaskId = 0
export const addTask = (task) => ({
    type: 'ADD_TASK',
    // id: nextTaskId++,
    payload: task
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id
})
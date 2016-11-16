export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';
export const SET_INACTIVE_TASK = 'SET_INACTIVE_TASK';

function TasksReducer(state, action) {
    if(state === undefined) {
        state = [
            { description: 'blagh', time: '00:00:00', key: 0, active: false },
            { description: 'asdvasdv', time: '00:00:00', key: 1, active: false },
            { description: 'avdssvawe', time: '00:00:00', key: 2, active: true },
            { description: 'blfadsagh', time: '00:00:00', key: 3, active: false },
            { description: 'blagh', time: '00:00:00', key: 4, active: false },
        ];
    }
    console.log(action.type);
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    // reduce to get the max key in task list, then add 1 to add to array
                    key: state.reduce((prevMaxKey, curTask) => Math.max(prevMaxKey > 0 ? prevMaxKey : 0, curTask.key)) + 1,
                    description: 'wooo',
                    time: '00:00:00'
                }
            ];
        case REMOVE_TASK:
            return state.filter(task => task.key !== action.taskKey);
        case EDIT_TASK:
            return state.map(task => {
                if(task.key === action.editedTask.key) {
                    return Object.assign({}, task, {
                        time: action.editedTask.time,
                        description: action.editedTask.description
                    });
                }
                return task;
            });
        case UPDATE_TIME:
            return state.map(task => {
                if(task.key == action.taskKey) {
                    return Object.assign({}, task, {
                        time: action.newTime
                    });
                }
                return task;
            });
        case SET_ACTIVE_TASK:
            return state.map(task => {
                if(task.key == action.taskKey) {
                    return Object.assign({}, task, {
                        active: true
                    });
                }
                return Object.assign({}, task, {
                    active: false
                });
            });
        case SET_INACTIVE_TASK:
            return state.map(task => {
                if(task.key == action.taskKey) {
                    return Object.assign({}, task, {
                        active: false
                    });
                }
                return task;
            });
    }
    return state;
};

export default TasksReducer;
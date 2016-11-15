export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

function TasksReducer(state, action) {
    if(state === undefined) {
        state = [
            { description: 'blagh', time: '00:00:00', key: 0 },
            { description: 'asdvasdv', time: '00:00:00', key: 1 },
            { description: 'avdssvawe', time: '00:00:00', key: 2 },
            { description: 'blfadsagh', time: '00:00:00', key: 3 },
            { description: 'blagh', time: '00:00:00', key: 4 },
        ];
    }
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
            break;
        case REMOVE_TASK:
            return state.filter(task => task.key !== action.taskKey);
            break;

    }
    return state;
};

export default TasksReducer;
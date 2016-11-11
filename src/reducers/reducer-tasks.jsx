const initialState = [
	{ description: 'blagh', time: '00:00:00' },
	{ description: 'asdvasdv', time: '00:00:00' },
	{ description: 'avdssvawe', time: '00:00:00' },
	{ description: 'blfadsagh', time: '00:00:00' },
	{ description: 'blagh', time: '00:00:00' },
];


// function taskApp(state = initialState, action) {
//  switch (action.type) {
//      case 'ADD_TASK':
//          return Object.assign({}, state, {
//              tasks: [
//                  ...state.tasks,
//                  {
//                      text: action.text
//                  }
//              ]
//          });
//      case 'REMOVE_TASK':
//          var tasks = tasks.filter((tasks) => tasks.index !== action.index);
//          return Object.assign({}, state, {
//              tasks: tasks
//          });
//      default:
//          return state
//  }
//  return state
// }

function TasksReducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD_TASK':
			return Object.assign({}, state, {
				tasks: [
					...state.tasks,
					action.payload
				]
			});
			break;
	}
	return state;
};

export default TasksReducer;
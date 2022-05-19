const initState = [
    { id: 1, name: 'Learn React', completed: false, prioriry: 'Medium' },
    { id: 2, name: 'Learn JavaScript', completed: true, prioriry: 'High' },
    { id: 3, name: 'Learn NodeJs', completed: true, prioriry: 'Low' },
    { id: 4, name: 'Learn Reponsize', completed: false, prioriry: 'Medium' },
];
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/ADD_TODO':
           return [ ...state, action.payload ]
        default:
            return state;
    }
}

export default todoListReducer;
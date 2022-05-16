const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn React', completed: false, prioriry: 'Medium' },
        { id: 2, name: 'Learn JavaScript', completed: true, prioriry: 'High' },
        { id: 3, name: 'Learn NodeJs', completed: true, prioriry: 'Low' },
        { id: 4, name: 'Learn Reponsize', completed: false, prioriry: 'Medium' },
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/ADD_TODO':
           return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
           }
        case 'filters/SEARCH_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;
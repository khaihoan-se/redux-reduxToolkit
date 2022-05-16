
export const addTodo = (data) => {
    return {
        type: 'todoList/ADD_TODO',
        payload: data
    }
}
export const searchFilter = (text) => {
    return {
        type: 'filters/SEARCH_FILTER',
        payload: text
    }
}
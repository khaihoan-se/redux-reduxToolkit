
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
export const statusFilterChange = (status) => {
    return {
        type: 'filters/STATUS_FILTER_CHANGE',
        payload: status
    }
}
export const prioritiesFilterChange = (prioritys) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: prioritys
    }
}
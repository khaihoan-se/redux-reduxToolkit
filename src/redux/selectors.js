import { createSelector } from "reselect"

export const searchTextSelector = state => state.filters.search;
export const statusFilterSelector = state => state.filters.status;
export const priorityFilterSelector = state => state.filters.priority;
export const todoListSelector = state => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector, 
    statusFilterSelector,
    searchTextSelector, 
    priorityFilterSelector,
    (todoList, status, searchText, priorities) => {
    return todoList.filter(todo => {
        if(status === 'All') {
            return priorities.length ? todo.name.toLowerCase().includes(searchText) && 
            priorities.includes(todo.priority) : todo.name.toLowerCase().includes(searchText)
        }

        return (
            todo.name.toLowerCase().includes(searchText) && 
            (status === 'Completed' 
                ? todo.completed 
                : !todo.completed)
        )
    });
}) 
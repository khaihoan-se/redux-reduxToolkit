const initState = {
    search: '',
    status: 'All',
    priority: []
}

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/SEARCH_FILTER':
            return {
                ...state.filters,
                search: action.payload
            }
        case 'filters/STATUS_FILTER_CHANGE':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/prioritiesFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;
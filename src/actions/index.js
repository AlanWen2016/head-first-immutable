let nextToId = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextToId ++,
    text
})

export const setVisibilityFilter = filter =>({
    type: 'SET_VISIBILITY_FILTER',
    filter
})


export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SET_ACTIVE'
}



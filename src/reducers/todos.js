const todos = (state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complte:false
                }
            ]
            case 'TOGGLE_TODO':
                return state.map(todo =>{
                    todo.id === action.id ? {...todo, complte: !todo.complte} : todo
                })
                default: 
                return state
    }
}


export default todos
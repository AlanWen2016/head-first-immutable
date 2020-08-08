import React from 'React'
import ProTypes from 'prop-types'



const Todo = ({onClick, complete, text}) =>{
    <li
        onClick= {onClick}
        style= {
            {
                textDecoration: complete ? 'line-through' : 'none'
            }
        }
    >
        {text}
    </li>
}


Todo.ProTypes = {
    onClick: ProTypes.func.isRequired,
    complete: ProTypes.bool.isRequired,
    text: ProTypes.string.isRequired
}


export default Todo
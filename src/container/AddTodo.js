import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/index'
import immutable, {Map, fromJS} from 'immutable'
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b'))
const imm = {a: 12345, b: 22}
const immObj = fromJS(imm)
console.log('immmutable', immObj, immObj.toJS(), immObj.toJS() === imm)

const ImmutableData = immutable.List([1,[3,5], 4,])
window.immutable = immutable

const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

console.log(nested2.getIn([ 'a', 'b', 'd' ])); // 6

const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6));



let AddTodo = ({dispatch})=>{
    let input
    return (
        <div>
            <form
                onSubmit={
                    e=>{
                        e.preventDefault()
                        if(!input.value.trim()) return
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }
                }
            >
                <input 
                    ref={
                        node => {input = node }
                    }
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)


export default AddTodo
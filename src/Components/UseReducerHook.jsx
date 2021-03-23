// a hook used for state management
// alternative to useState hook
// useState is built using useReducer

// Example : 

// let arr = [1,2,3];
// arr.reduce( (initVal, val) => {
//     let total =  initVal + val; //    1 + 2
//     return total;
// }, 0)

// const reducer = (accumlator, currentValue) => {
//     return accumlator + currentValue;
// }

// arr.reduce(reducer, 0) // second parameter is initvalue of accumulator

// accumlator, currentValue
// reduce(() => {}) => excute a function on each array element

// ****** React useReducer() hook definition and syntax: 

// const [state, dispatch] = useReducer(reducer, initialState)

// useReducer() hook returns pair of values [newState, dispatch => use to specify action]

// newState = reducer(currentState, action); // reducer() function returns newState(updatedState)


import React, {useReducer} from 'react'

const UseReducerHook = () => {

    const init = 0;

    const reducer = (state, action) => {
        
        switch(action){
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, init)

    return (
        <div>
            <h1> Count - {count}</h1>
            <button onClick={ () => dispatch('increment')}> Increment</button>
            <button onClick={ () => dispatch('decrement')}> Decrement</button>
            <button onClick={ () => dispatch('reset')}> Reset</button>
            <button onClick={ () => dispatch('reset1')}> other</button>
        </div>
    )
}

export default UseReducerHook


import React, {useReducer} from 'react'

const UseReducerHookEx2 = () => {

    const init = {
         counter: 0,
         counter1:0
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'increment':
                return {
                    ...state, 
                    counter: state.counter + action.payload,
                };
            case 'increment2':
                return {
                    ...state,
                    counter1: state.counter1 + action.payload
                }
        }
    }

    const [count, dispatch] = useReducer(reducer , init);

    
    return (
        <div>
            <h1> Count - {count.counter} {count.counter1}</h1>
            <button onClick={() => dispatch({type: 'increment',payload:5})}> Increment 5</button>
            <button onClick={() => dispatch({type: 'increment2',payload:2})}> Increment 2</button>
        </div>
    )
}

export default UseReducerHookEx2

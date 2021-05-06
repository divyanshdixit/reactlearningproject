// import { Component } from "react";

// // useReducers => state manage local(state within the same component)

// // share state b/w components (global state management)

// App.js => Component A => Component B => Component C (prop drilling)

// x = 10;

// Context API => useContext hook => functional Component

import React, { useContext } from 'react'
import countContext from './App';

const UseReducerWithUseContext = () => {
    const counterContext = useContext(countContext());

    return (
        <div>
            <button onClick={() => countContext.countDispatch('increment')}> Click me Count</button>
        </div>
    )
}

export default UseReducerWithUseContext

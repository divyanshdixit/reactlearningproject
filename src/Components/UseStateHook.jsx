// Hooks: functional com, state, lifecycle methods 

// hooks are function that let you into state, lc methods in functinal component


// const [name, setName] = useState('abc') // name:abc [init, update]

// const [city, setCity] = useState('sdsd'); // city:sasd [init, update]

import React, { useState } from 'react';

const UseStateHook = () => {
    
    var [name, setName]  = useState('divyansh'); // return [stateVlaue, updateState]

    function ChangeValue() {
        name =  "New Value";
        setName(name);
    }

    return(
        <>
            <p> {name} </p>
            <button type="button" onClick={ChangeValue}>   Change </button>
        </>
    )
}


export default UseStateHook;
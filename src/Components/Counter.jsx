import React, { useState } from 'react';

var count = 0;
var initColor = 'red';

const Counter = () => {
    
    var [initValue, UpdateValue] = useState(count); // hook
    var [color, UpdateColor] = useState(initColor); 

    // setInterval(() => {
    //     count++;
    //     UpdateValue(count);
    // }, 1000);

    function Counter(){
        // count = count + 1;
        color = 'yellow';
        UpdateValue(initValue+1);    
        UpdateColor(color);    
    }
    
    return(
        <>
            <h1 style={{
                color:color
            }}> Count: {initValue} </h1>
            <button type="button" onClick={Counter}> Click </button>
        </>
    )
}

export default Counter;
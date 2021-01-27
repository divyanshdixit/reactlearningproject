import React, {useState} from 'react';

const Form1 = () => {

    // controlled component => form elem controlled by react compon , 'single source of truth'
    const [state, updateState] = useState('');
    
    const [data, updateData] = useState('');

    function changeEvent(event) {
        // console.log(event.target.value);
        var val = event.target.value
        updateState(val);
    }

    function clickEvent(event) {
        updateData(state)
    }

    return(
        <>
            <h1> Form 1 data show here {state} </h1>
            <h2> Submitted data will show here {data} </h2>
            <input type="text" name="text" placeholder="Enter your input" onChange={changeEvent} value={state}/> 
            <button type="button" onClick={clickEvent}> Submit </button>
        </>
    )
}

export default Form1;
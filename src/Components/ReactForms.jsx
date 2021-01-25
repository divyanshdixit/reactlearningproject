import React, {useState} from 'react';


// two type of compopnent = > controlled , uncontrolled

// controlled > an input form element whose value is controlled by react 

const ReactForm = () => {

    const [state, updateState] = useState("");
    const [initValue, updateValue] = useState();

    function getValue(event) {
        console.log(event.target.value);
        updateState(event.target.value);
    }

    function onSubmit(event) {
        updateValue(state);
        updateState('');
    }

    return(
        <>
          <h1> Hello {initValue} </h1>  
          <input type="text" className="user_input" placeholder="Enter text" value={state} onChange={getValue} />
          <button type="button" onClick={onSubmit}> Submit </button> 
        </>

    )
}

export default ReactForm
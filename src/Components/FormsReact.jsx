import React, {useState} from 'react';


// controlled compo, uncontrolled compo 

const Forms = () => {

    const [initV, updateValue] = useState("");
    const [names, updateNames] = useState();

    function changeValue(e){
        updateValue(e.target.value);
    }

    function clickEvent(){
        updateNames(initV);
       updateValue('');
        
    }
    return(
        <>
        <form >
        <h1> Hello {names} </h1>
            <input type="text" placeholder="Enter text here" value={initV} onChange={changeValue} />  
            <button type="submit" onClick={clickEvent}> Submit value</button>
        </form>
            
        </>
    )
}

export default Forms;
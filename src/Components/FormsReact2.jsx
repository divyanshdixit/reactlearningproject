import React, { useState } from 'react';

const Form2 = () => {
    
    const [fname, updateFname] = useState(''); // useState({ fname:'', lname:'', email:''})
    const [lname, updateLname] = useState('');
    const [fullname, updateFullName] = useState('');

    function changeEvent(event) {
        // console.log(event.target.value);
        updateFname(event.target.value);
    }

    function changeEvent2(event) {
        // console.log(event.target.value);
        updateLname(event.target.value);
    }

    function clickEvent(e) {
        var name = `${fname} ${lname}`;
        updateFullName(name);
        updateFname('');
        updateLname('');
    }
    return(
        <>
            <h1> Form data here {fname} {lname}</h1>
            <h2> Submitted data will show here {fullname}  </h2>
            <input type="text" placeholder="Enter your first name" onChange={changeEvent} value={fname} /> 
            <input type="text" placeholder="Enter your last name" onChange={changeEvent2} value={lname} /> 
            <button type="button" onClick={clickEvent}> Submit </button>
        </>
    )
}

export default  Form2;
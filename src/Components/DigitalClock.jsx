import React, {useState} from 'react';

const DigitalClock = () => { //async await 

    var now = new Date().toLocaleTimeString(); // get current time
    
    const [state, updateTime] = useState(now) // ('', fn)
    function gettime(){
        now  = new Date().toLocaleTimeString();
        updateTime(now);
    }
    return(
        <>
            <p> Current time is: {state}</p>

            <button type="button" onClick={gettime}> Get time </button>
        </>
    )
}

export default DigitalClock;
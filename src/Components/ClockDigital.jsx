import React, { useState } from 'react';

const ClockDigital = () => {
    var currentTime = new Date().toLocaleTimeString();

     var [currentTime, UpdateTime] = useState(currentTime);

     setInterval(() => {
        currentTime = new Date().toLocaleTimeString();
        UpdateTime(currentTime);
     }, 1000);

    
    return(
        <>
            <p> Current time : {currentTime} </p>
        </>
    )
}

export default ClockDigital;
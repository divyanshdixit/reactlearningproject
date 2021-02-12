import React, {useEffect, useState} from 'react'

// useEffect() will after every render , replacement => compDmount, compDupdate, compWunmount
const HookUseEffect = () => {
    const [state, setstate] = useState(0);
    const [num, setnum] = useState(0);
    const [disp, setdisp] = useState(true);

    // pass empty array if we want to run useEffect once 

    // pass with desired input for which you want to run the useEffect

    useEffect(() => {
        document.title = `Clicked ${state} times`
        console.log('object')

        return () => {
            // cleanup =>  component will unmount
            document.removeEventListener('mousemove', mouseMovement)
        }
    }, [num, state, disp]) 

    const countI = () => {
        setstate(state+1);
    }

    const changeName = () => {
        setnum(num+1);
        setdisp(false);

    }

    const mouseMovement = (e) => {
        console.log(e.clientX, e.clientY)
    }

    return (
        <div>
            <h1> My name is - {num}</h1>
            <h1 onMouseMove={mouseMovement} style={disp ? {display:'block'} : {display:'none'}}> Useffect - {`Clicked ${state} times `} </h1>
            <button onClick={countI}> Increment Count </button>
            <button onClick={changeName}> Change Nm </button>
        </div>
    )
}

export default HookUseEffect

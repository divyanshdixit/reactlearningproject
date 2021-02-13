import React from 'react'
import ChildStyle from '../Style.module.css';

// child component
// css modules => Style1.module.css
function GetPropAsFun(props) {
    return (
        <div>
        <h1 className={ChildStyle.heading}> Check </h1>
        <button type="button" onClick={() => props.handler(10,20)}> Click </button>
            {/* <button id={props.key} onClick={ () => props.handler('asd', 'asdas') }> Call parents </button> */}
        </div>
    )
}

export default GetPropAsFun

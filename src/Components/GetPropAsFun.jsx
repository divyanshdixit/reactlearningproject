import React from 'react'
import styles from '../Style.module.css';

function GetPropAsFun(props) {
    return (
        <div>
        <h1 className={styles.heading}> Check </h1>
            <button id={props.key} onClick={ () => props.handler('asd', 'asdas') }> Call parents </button>
        </div>
    )
}

export default GetPropAsFun

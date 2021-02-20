import React, { Component, useContext } from 'react'
import ContextComponentF from './ContextComponentF'
import {userContext, compoContext} from '../App';

const ContextComponentE = (props) => {

    const fnameContext = useContext(userContext) // provide ()
    const useCompoContext = useContext(compoContext) // provide ()

    return (
        <div>
            Component E =  {fnameContext} == {useCompoContext}
            <ContextComponentF/>
        </div>
    )
}

export default ContextComponentE

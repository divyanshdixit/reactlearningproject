// 16.6 => 

import React, {useState} from 'react'
import ComponentPure from './PureComponent'

const MemoComponent = () => {
    console.log('Render method')
    const [state, setstate] = useState('Divyansh');

    function clickHandler(){
        setstate('Divyansh1');
    }
    
    return (
        <div>
            {state}
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}

export default React.memo(MemoComponent)

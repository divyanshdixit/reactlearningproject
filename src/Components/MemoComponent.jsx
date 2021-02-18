// 16.6 => 

import React, {useState} from 'react'
// import ComponentPure from './PureComponent'

const MemoComponent = () => {
    console.log('Render method')
    const [state, setstate] = useState('Divyansh');

    // function clickHandler(){
        setInterval( () => {
            console.log('object')
            setstate('Divyansh1');
        }, 1000)
    // }
    
    return (
        <div>
            {state}
            <button > Click </button>
        </div>
    )
}

export default React.memo(MemoComponent)

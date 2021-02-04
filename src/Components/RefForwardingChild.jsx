// it automatic passes the ref through the component to its children

// current will only refer to native input element not the whole instance of class.

// React.forwardRef() 
import React from 'react'


const RefForwardingChild = React.forwardRef( (props, refs) => {
    return (
        <div>
            <input type="text" placeholder="input" ref={refs}/>
        </div>
    )
})

export default RefForwardingChild
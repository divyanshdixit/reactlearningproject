// it automatic passes the ref through the parent component to its children

// current will only refer to native input element not the whole instance of class.

// React.forwardRef(Component as an argument) 

import React from 'react'

const RefForwardingChild = React.forwardRef( (props,refs) => {
    console.log(refs)
    return (
        <div>
            <input type="text" placeholder="input" ref={refs}/>
            <input type="text" placeholder="input" />
            <input type="text" placeholder="input" />
            <h4 ref={refs}> H4 Heading </h4>
        </div>
    )
})

export default RefForwardingChild
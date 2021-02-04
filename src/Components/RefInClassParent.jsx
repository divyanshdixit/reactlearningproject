// parent ==> button

// child=> input 

// if you need ref to a child component from parent (passing ref in child componet from parent)

import React, { Component } from 'react'
import RefInClassChild from './RefInClassChild'

class RefInClassParent extends Component {
    constructor(props) {
        super(props)
    
        this.childRef = React.createRef();
    }
    

    clickHandler =() => {
        this.childRef.current.focusedInput();
    }

    render() {
        return (
            <div>
                <RefInClassChild ref={this.childRef}/>
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default RefInClassParent

// parent ==> button

// child=> input 

// Ref with class Component:

// if you need ref to a child component from parent (passing ref in child componet from parent)

import React, { Component } from 'react'
import RefInClassChild from './RefInClassChild';

class RefInClassParent extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        console.log(this.inputRef);
    }
    
    clickHandler= () => {
        console.log(this.inputRef);
        this.inputRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <h1> Ref in parent </h1>
                <RefInClassChild ref={this.inputRef}/>
                <button onClick={this.clickHandler}> Click me </button>
            </div>
        )
    }
}

export default RefInClassParent

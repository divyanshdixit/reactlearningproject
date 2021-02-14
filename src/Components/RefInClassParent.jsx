// parent ==> button

// child=> input 

// Ref with class Component:

// if you need ref to a child component from parent (passing ref in child componet from parent)

import React, { Component } from 'react'
import RefInClassChild from './RefInClassChild';

class RefInClassParent extends Component {

    constructor(props) {
        super(props)
    
        this.childRef = React.createRef();
        console.log(this.childRef);
    }

    clickHandler = () => {
        console.log(this.childRef);
        this.childRef.current.focusInput()
    }

    clickHandler2 = () => {
        console.log(this.childRef);
        this.childRef.current.focusInput2()
    }
    
    render() {
        return (
            <div>
                <h1> Ref in parent </h1>
                <RefInClassChild ref={this.childRef}/>
                <button onClick={this.clickHandler}> Click me </button>

                <button onClick={this.clickHandler2}> Second Input focus </button>
            </div>
        )
    }
}

export default RefInClassParent

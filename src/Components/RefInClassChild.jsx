import React, { Component } from 'react'

class RefInClassChild extends Component {
   
    constructor(props) {
        super(props)
    
        this.inputChildRef = React.createRef();
        this.inputChild1Ref = React.createRef();
    }

    focusInput = () => {
        this.inputChildRef.current.focus();
    }

    focusInput2 = () => {
        this.inputChild1Ref.current.focus();
    }
    
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your input" ref={this.inputChildRef}/>
                <input type="text" placeholder="Enter your input" ref={this.inputChild1Ref}/>

            </div>
        )
    }
}

export default RefInClassChild

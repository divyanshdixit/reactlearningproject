import React, { Component } from 'react'

class RefInClassChild extends Component {
   
    constructor(props) {
        super(props)
    
        this.inputChildRef = React.createRef();
        this.inputChild1Ref = React.createRef();
        this.inputChild2Ref = React.createRef();
        this.inputChild3Ref = React.createRef();
    }

    focusInput = () => {
        this.inputChildRef.current.focus();
    }    

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your input" ref={this.inputChildRef}/>
                <input type="text" placeholder="Enter your input" ref={this.inputChild1Ref}/>
                <input type="text" placeholder="Enter your input" ref={this.inputChild2Ref}/>
                <input type="text" placeholder="Enter your input" ref={this.inputChild3Ref}/>

            </div>
        )
    }
}

export default RefInClassChild

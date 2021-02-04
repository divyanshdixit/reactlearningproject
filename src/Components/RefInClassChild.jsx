import React, { Component } from 'react'

class RefInClassChild extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }
    
    focusedInput(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefInClassChild
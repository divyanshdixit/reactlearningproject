import React, { Component } from 'react'
import RefForwardingChild from './RefForwardingChild';

class RefForwardingParent extends Component {

    constructor(props) {
        super(props);
        this.childInputRef = React.createRef()
        // this.childHeadingRef = React.createRef()
    }
    
    clickHandler = () => {
        this.childInputRef.current.focus();
    }

    render() {
        return (
            <div>
                <RefForwardingChild name="div" ref={this.childInputRef}/>
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default RefForwardingParent

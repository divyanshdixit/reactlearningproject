import React, { Component } from 'react'
import ContextComponentE from './ContextComponentE'

class ContextComponentD extends Component {
    render() {
        console.log(this.props.value) //10
        return (
            <div>
                Component D 
                <ContextComponentE/>
            </div>
        )
    }
}

export default ContextComponentD

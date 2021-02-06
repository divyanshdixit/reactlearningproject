import React, { Component } from 'react'
import ContextComponentE from './ContextComponentE'

class ContextComponentD extends Component {
    render() {
        return (
            <div>
                Component D 
                <ContextComponentE/>
            </div>
        )
    }
}

export default ContextComponentD

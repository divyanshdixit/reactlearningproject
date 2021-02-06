import React, { Component } from 'react'
import {Consumer} from '../App';

class ContextComponentF extends Component {
    render() {
        return (
                <div>
                    <Consumer>
                    {
                        (name) => {
                            return (<div> Hello {name} </div> )
                        }
                    }
                    Component  F
                        
                    </Consumer>
                </div>
        )
    }
}

export default ContextComponentF

import React, { Component } from 'react'
import {Consumer, compoContext, userContext} from '../App';

class ContextComponentF extends Component {
    render() {
        return (
                <userContext.Consumer>
                    {
                        (username) => {
                            return (
                                <compoContext.Consumer> 
                                {
                                    (otherContext) => {
                                        return <h1> Component F Hello {username} {otherContext}</h1>
                                    }
                                }
                                
                                
                                </compoContext.Consumer>
                            )
                        }
                    }
                </userContext.Consumer>
        )
    }
}

export default ContextComponentF

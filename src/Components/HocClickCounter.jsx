import React, { Component } from 'react'
import updatedComponent from './HocPattern';

class HocClickCounter extends Component {
    
    render() {
        
        const {count, incrementFunction, otherProps, pop1} = this.props;

        return (
            <div>
                <h1> Click Counts {count} some other props like - {otherProps} {pop1}</h1>
                {/* <h1> Click Counts {this.state.count} </h1> */}
                <button onClick={incrementFunction}> Click Counter </button>
            </div>
        )
    }
}

// calling updatedComponent function and passing in clickCounter component as parameter
// insted of exporting compontnet , we export function call {higher order component}
export default updatedComponent(HocClickCounter)

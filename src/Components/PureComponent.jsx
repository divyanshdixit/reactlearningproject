import React, { Component, PureComponent } from 'react'

class ComponentPure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Divyansh'
        }
    }

    componentDidMount(){
        setInterval( () => {this.setState({
            name: 'Divyansh'
        })}, 3000)
    }
    
    // Shallow comparison

    // '1' === 1
    /*
    var a = {1,2,3}
    var b = a
    var c = a;

    a === b true
    a === c true
    */


    render() {
        console.log('Pure compo render method')
        return (
            <div>
                Pure Component {this.state.name}
            </div>
        )
    }
}

export default ComponentPure
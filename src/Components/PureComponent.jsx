import React, { Component, PureComponent } from 'react'

// shallow comparison 
// if value is changed the inly it'll re-render the component

// pureCompo => implements shouldComponentUpdate() with shallow comparison
// regular comp => doesn't implement shouldComponentUpdate()

class ComponentPure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Divyansh',
             city:'asdas'
        }
    }

    componentDidMount(){
        setInterval( () => {this.setState({
            name: 'Abhushek'
        })}, 3000)
    }
    
    // Shallow comparison
    // ==, ===
    // '1' === 1 return false

    // a == a
    /*
    var a = [1,2,3], {}
    var b = a
    var c = b;
    reference
    // call by value
    // call by reference

    a === b false [value = = = reference]]
    b === c true
    */


    render() {
        console.log('object')
        console.log('Pure compo render method')
        return (
            <div>
                Pure Component {this.state.name}
            </div>
        )
    }
}

export default ComponentPure
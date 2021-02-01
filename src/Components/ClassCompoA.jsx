import React, { Component } from 'react'

class ClassCompoA extends Component { // regular compo, pureComponent 

    constructor(props) { // state, binding an event 
        super(props);
        this.state = {
            name: 'User',
            count: 0,
            idNumber : this.props.id
        }

        // this.changeNameHandler = this.changeNameHandler.bind(this)
    }

    changeNameHandler(){
        this.setState({
            name:'User3'
        }, () => {
            console.log(this.state.name)
        })

        console.log(this.state.name)
    }

    // Depend on prevState
    getPrevVal() {
        this.setState( (prev) => ({
            count : prev.count + 3
        }) , () => {
            console.log(this.state.count);
        })
    }
    
    
    render() {
        
        return (
            <div>
                <h1> Hello Class A compo {this.state.name} id is {this.state.idNumber}</h1> 
                {this.props.children}   
                <button onClick={ () => this.changeNameHandler() }> Change Name </button>            
                <button onClick={ () => this.getPrevVal() }> Get prev value </button>            
            </div>
        )
    }
}

export default ClassCompoA

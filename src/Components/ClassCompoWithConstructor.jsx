import React, { Component } from 'react';

// props, state (private to the class) management, lifecycle method, ref
// props => state (props are immuable but states are mutable)

// 
// Advanced js class concept 
// this keyword in class

// Difference b/w props and state
/*
    props => immutable, state =>mutable
    class  compo => this.props,this.state
    function compo => props, useState()
    
*/

// Counter
class WithConstructor extends Component{ // smart, stateFul, 

    constructor(props){ // event bind, state, ref
        super(props); // 
        this.state = {
            name:'divyansh',
            city:'kanpur'
        }
    }

    clickHandler = () => {
        // this.setState({
        //     name:'Divyansh2',
        //     city:'Lucknow'
        // });

        this.setState( (prev) => { // async function
            if(prev.city === 'kanpur'){
                return {
                    ...prev,
                    city:'Lucknow',
                    name:'Divyansh2'
                }
            }
        }, () => {
            console.log(this.state)
        });

        console.log(this.state);
    }

    render(){ // return jsx or null
        return(
            <>
                <h1> this is class with constructor {this.state.name} {this.state.city}</h1>
                <button type="button" onClick={this.clickHandler}> Change me </button>
            </>
        )
    }

}

export default WithConstructor;




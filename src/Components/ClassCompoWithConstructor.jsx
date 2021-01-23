import React, { Component } from 'react';

class WithConstructor extends Component{ // 

    constructor(props){
        super(props);
        this.state = {
            name:'divyansh',
            city:'kanpur' ,
            agevalue:this.props.age // property
        }
    }

    render(){
        return(
            <>
                <h1> this is class with constructor {this.state.name} {this.state.agevalue}</h1>
            </>
        )
    }

}

export default WithConstructor;




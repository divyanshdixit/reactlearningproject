import React, { Component } from 'react';

// state => private, modify, lifecycle method
// without constructor 

class FirstClassCompo extends Component{
   
    state = {
        name:'divyansh',
        city:'kanpur' ,
        agevalue:this.props.ages
    }
    
   render(){
        return(
            <>
                <h1> Class component {this.state.city} </h1>
            </>
        )
   }
}

export default FirstClassCompo
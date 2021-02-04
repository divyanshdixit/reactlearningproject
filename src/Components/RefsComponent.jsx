// use for getting the DOM node in react

import React, { Component } from 'react'

class RefsComponent extends Component {
    constructor(props) {
        super(props)
        
        // 1st step create ref
        this.inputRef = React.createRef();
        this.headingRef = React.createRef();

        // creat ref using callback function 

        // this.ipRef = null;
        // this.setipRef = (elem) => {
        //     this.ipRef = elem
        // }
    }
    
    componentDidMount(){
        console.log(this.inputRef);
        console.log(this.ipRef);
        console.log(this.headingRef);

        // if(this.ipRef){
        //     this.ipRef.focus()
        // }

        // this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        console.log(this.inputRef);
        console.log(this.headingRef);
        return (
            <div>
            {/* 2nd step use */}
                <h1 ref={this.headingRef}> Refs </h1>
                <input type="text" ref={this.inputRef}/>
                {/* <input type="text" placeholder="text" ref={this.setipRef}/> */}
                <button onClick={this.clickHandler}> Get value </button>
            </div>
        )
    }
}

export default RefsComponent
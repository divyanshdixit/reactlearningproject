// ref => use for getting the DOM node in react component 

// ref => can also hold whole instance of class 

import React, { Component } from 'react'

class RefsComponent extends Component {
    constructor(props) {
        super(props);
        
        // 1st step => create ref

        this.inputRef = React.createRef();
        // this.headingRef = React.createRef();

        // create ref using callback function 

        // this.ipRef = null;
        // this.setipRef = (element) => {
        //     this.ipRef = element
        // }
    }
    
    componentDidMount(){
        
        console.log(this.inputRef);
        console.log(this.headingRef);
        // console.log(this.ipRef);

        // if(this.ipRef){
        //     this.ipRef.focus()
        // }

        // this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.value);
    }

    render() {
        // console.log(this.inputRef);
        // console.log(this.headingRef);
        return (
            <div>
            {/* 2nd step use */}
                <h1 ref={this.headingRef}> Refs </h1>
                <input type="text" ref={this.inputRef} />
                {/* <input type="text" placeholder="text" ref={this.setipRef}/> */}
                <button onClick={this.clickHandler}> Get value </button>
            </div>
        )
    }
}

export default RefsComponent

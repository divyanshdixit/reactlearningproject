import React, { Component } from 'react'

class BindEventInClass extends Component {

    constructor(props) {
        super(props)
        
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    // clickHandler(){
    //     console.log(this)
    // }

    clickHandler = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <h1> Event </h1>
                {/* bind() method in render function  */}
                <button onClick={this.clickHandler.bind(this)}> Click event </button>

                {/* use arrow function in render jsx */}
                <button onClick={ () => this.clickHandler()}> Click event </button>

                {/* use bind() in connst */}
                <button onClick={ this.clickHandler}> Click event 3 </button>

                {/* make handler as property */}
                <button onClick={ this.clickHandler}> Click event 3 </button>

                <button onClick={ () => this.props.handler()}> Call Parent function as props </button>

            </div>
        )
    }
}

export default BindEventInClass

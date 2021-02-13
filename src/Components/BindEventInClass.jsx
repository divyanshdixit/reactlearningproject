import React, { Component } from 'react'

class BindEventInClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
        
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState((prev) => {
            return {
                count:prev.count + 1
            }
        })
    }

    clickHandler1 = () => {
        this.setState((prev) => {
            return {
                count:prev.count + 1
            }
        })
    }

    render(){
        return(
            <>
                <h1> Hello event - {this.state.count}</h1>
                <button type="button" onClick={this.clickHandler}> Event </button>
                {/*  arrow function in rendder method */}
                <button type="button" onClick={ () => this.clickHandler()}> Event </button>

                <button type="button" onClick={this.clickHandler1}> Event </button>

            </>
        )
    }
    // constructor(props) {
    //     super(props)
        
    //     this.clickHandler = this.clickHandler.bind(this);
    // }
    
    // // clickHandler(){
    // //     console.log(this)
    // // }

    // clickHandler = () => {
    //     console.log(this)
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1> Event </h1>
    //             {/* bind() method in render function  => performance issue*/}
    //             <button onClick={this.clickHandler.bind(this)}> Click event </button>

    //             {/* use arrow function in render jsx */}
    //             <button onClick={ () => this.clickHandler()}> Click event </button>

    //             {/* use bind() in connst */}
    //             <button onClick={ this.clickHandler}> Click event 3 </button>

    //             {/* make handler as property */}
    //             <button onClick={ this.clickHandler}> Click event 3 </button>

    //             <button onClick={ () => this.props.handler()}> Call Parent function as props </button>

    //         </div>
    //     )
    // }
}

export default BindEventInClass

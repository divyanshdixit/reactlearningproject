// import { ThreeSixtySharp } from '@material-ui/icons'
import React, { Component } from 'react'

// child compo
class LifeCycleB extends Component {

    // first method  
    constructor(props) {
        super(props)
    
        this.state = {
            name: this.props.name // Divyansh, Abhishek
        }
    }

    // second method
    static getDerivedStateFromProps(props, state){
       console.log(props, state);
       if(props.name !== state.name){
            return {...props}
       }else{
            return null;
       }
    }
    
    // fourth method
    componentDidMount(){
        console.log('Compoent did mount method Lc B');
    }

    

    // third method
    render() {
        console.log('render method Lifecycle B')
        return (
            <div>
                LifeCycle B 
                
            </div>
        )
    }
}

export default LifeCycleB

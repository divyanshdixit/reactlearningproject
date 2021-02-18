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
        console.log('child const method')
    }

    // second method
    static getDerivedStateFromProps(props, state){
        console.log('child dervied state method lifecycle B')
       console.log(props, state);
       if(props.name !== state.name){
            return {...props}
       }else{
            return null;
       }
    }
    
    // fourth method
    componentDidMount(){
        console.log('child Compoent did mount method Lc B');
    }

    

    // third method
    render() {
        console.log('child render method Lifecycle B')
        return (
            <div>
                LifeCycle B 
                
            </div>
        )
    }
}

export default LifeCycleB

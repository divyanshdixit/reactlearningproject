import { ThreeSixtySharp } from '@material-ui/icons'
import React, { Component } from 'react'

class LifeCycleB extends Component {

    // first method  
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Divyansh'
        }

        console.log('const method Lifecycle B')
    }

    // second method
    static getDerivedStateFromProps(props, state){
       console.log(props, state);
       console.log('Derived state method Lifecycle B');
       return null;
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

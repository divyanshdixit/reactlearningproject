import { ThreeSixtySharp } from '@material-ui/icons'
import React, { Component, PureComponent } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    // first method  
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Divyansh'
        }

        console.log('const method Lifecycle A')
    }

    

    // second method
    static getDerivedStateFromProps(props, state){
       console.log(props, state);
       console.log('Derived state method Lifecycle A');
       return null;
    }
    
    // fourth method
    componentDidMount(){
        console.log('Compoent did mount method');
    }

    // third method
    render() {
        console.log('render method Lifecycle A')
        return (
            <div>
                LifeCycle A 
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA

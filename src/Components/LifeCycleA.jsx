// import { ThreeSixtySharp } from '@material-ui/icons'
import React, { Component, PureComponent } from 'react'
import LifeCycleB from './LifeCycleB'

// parent compo
class LifeCycleA extends Component {

    // first method  
    constructor(props) {
        super(props);
        
        // state initialise
        this.state = {
             name: 'Divyansh'
        }
        console.log('parent const method')
    }

    clickHandler = () => {
        this.setState({
            name : 'Abhishek'
        })
    } 

    // second method , 1st method only for updatign phase
    static getDerivedStateFromProps(props, state){
       console.log(props, state);
       console.log('parent Derived state method Lifecycle A');
       return null;
    }

    // // 2nd method for updating
    shouldComponentUpdate(updateProps, updateState){
        console.log(updateProps, updateState);
        if(this.state.name === updateState.name){
            return false;
        }
        return true;
    }
    
    // fourth method

    componentDidMount(){
        console.log('parent Compoent did mount method lifecycle A');
    }

    // // foruth
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('Get snap shot method for LC A ')
    //     return null;
    // }

    // // fifth
    // componentDidUpdate(prevProps, prevState, value){
    //     console.log(value)
    //     console.log('component updated');
    // }

    // third method
    render() { // jsx 
        console.log('parent render method Lifecycle A')
        return (
            <div>
                LifeCycle A

                <button onClick={this.clickHandler}> Change State </button>
                 {/*child component */}
                <LifeCycleB name={this.state.name}/>
            </div>
        )
    }
}

export default LifeCycleA

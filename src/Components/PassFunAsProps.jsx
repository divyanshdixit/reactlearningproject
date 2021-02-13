import React, { Component } from 'react'
import GetPropAsFun from './GetPropAsFun'


// pass methods as props
// parent component
class PassFunAsProps extends Component {

    callFun = (x, y) => {
       
        let sum = x + y;
        alert(sum);
        // alert('parent method')
        // console.log('object')
    }

    render() {
        return (
            <div>
            {/* this.props */}
            {/* pass methods as props in child component */}
            {/* child component */}
                <GetPropAsFun handler = {this.callFun} />
            </div>
        )
    }
}

export default PassFunAsProps

import React, { Component } from 'react'
import GetPropAsFun from './GetPropAsFun'

class PassFunAsProps extends Component {

    callFun = (f, l) => {
        console.log(f, l)
        console.log('object')
    }

    render() {
        return (
            <div>
            {/* pass methods as props in child component */}
                <GetPropAsFun handler = {this.callFun}/>
            </div>
        )
    }
}

export default PassFunAsProps

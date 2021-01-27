import React, { useState } from 'react';

const Form3 = () => {
    
    const [user, updateUser] = useState({
                                    fname:'', 
                                    lname:'',
                                    email:'',
                                    phone:''
                                    })

    function changeEvent(event) {
        // var DomName = event.target.name;
        // var val = event.target.value;

        const {name, value} = event.target;

        updateUser( (prev) => {
            return{
            ...prev, // fname:''
            [name] : value // fname: divyansh
            }

             // if(DomName == 'fname'){
            //         return{
            //             fname:val,
            //             lname:prev.lname,
            //             email:prev.email
            //         }
            // }else if(DomName == 'lname'){
            //     return{
            //         fname:prev.fname,
            //         lname:val,
            //         email:prev.email
            //     }
            // }else if(DomName == 'email'){
            //     return{
            //         fname:prev.fname,
            //         lname:prev.lname,
            //         email:val
            //     }
            // }
        })
        // 
        // 
    }

    function submitEvent(e) {
        e.preventDefault();
    }

    return(
        <>
            <h1> Form data here {user.fname} {user.lname} {user.email} {user.phone}</h1>
            {/* <h2> Submitted data will show here {details}   </h2> */}

            <form onSubmit={submitEvent}>
            <input type="text" name="fname" placeholder="Enter your first name" onChange={changeEvent} value={user.fname} /> 
            <input type="text" name="lname" placeholder="Enter your last name" onChange={changeEvent} value={user.lname} /> 
            <input type="text" name="email" placeholder="Enter your email" onChange={changeEvent} value={user.email} /> 
            <input type="text" name="phone" placeholder="Enter your contact no" onChange={changeEvent} value={user.phone} /> 
            <button type="submit" > Submit </button>
            </form>
        </>
    )
}

export default  Form3;
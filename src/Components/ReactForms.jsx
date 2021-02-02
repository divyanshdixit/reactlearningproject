import React, {useState} from 'react';

const ReactForm = () => {

    // useState({}) => userState can taken object, array, number , string
    const [user, setuser] = useState({
        fname: '',
        lname : '',
        email : ''
    }) 

    const changeEvent = (e) => {
        var name = e.target.name;
        var val = e.target.value;

        // setState( (prev) => {})
        if(name === 'fname'){
            setuser( (prev) => ({
                fname: val,
                lname : prev.lname,
                email : prev.email
                })
            )
        }else if(name === 'lname'){
            setuser( (prev) => ({
                fname: prev.fname,
                lname : val,
                email : prev.email
                })
            )
        }else if(name === 'email'){
            setuser( (prev) => ({
                fname: prev.fname,
                lname : prev.lname,
                email : val
                })
            )
        }
    }

    const clickEvent = () => {
        
    }

    return(
        <>
            <h1> React form {user.fname} {user.lname} {user.email} </h1>
            <h1> React form values  </h1>
            <input type="text" placeholder="enter your fname" name="fname" value={user.fname} onChange={changeEvent}/>
            <input type="text" placeholder="enter your lname" name="lname" value={user.lname} onChange={changeEvent}/>
            <input type="text" placeholder="enter your email" name="email" value={user.email} onChange={changeEvent}/>
            <button type="button"onClick={clickEvent}> Submit </button>
        </>
    )
}

export default ReactForm
import React, {useState} from 'react';

const ReactForm = () => {

    // useState({}) => userState can taken object, array, number , string
    const [user, setuser] = useState({
        fname: '',
        lname : '',
        email : '',
        phone:''
    }) 

    const changeEvent = (e) => {
        // var name = e.target.name;
        // var val = e.target.value;
        
        const {name, value} = e.target; // fname

        // setState( (prev) => {})
        
        setuser( (prevState) => {
            return{
                ...prevState,
                [name]:value
            }
        } )
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <h1> React form {user.fname} {user.lname} {user.email} {user.phone}</h1>
            <h1> React form values  </h1>
            <form onSubmit={submitForm}>
            <input type="text" placeholder="enter your fname" name="fname" value={user.fname} onChange={changeEvent}/>
            <input type="text" placeholder="enter your lname" name="lname" value={user.lname} onChange={changeEvent}/>
            <input type="text" placeholder="enter your email" name="email" value={user.email} onChange={changeEvent}/>
            <input type="text" placeholder="enter your phone" name="phone" value={user.phone} onChange={changeEvent}/>
            <button type="submit"> Submit </button>
            </form>
        </>
    )
}

export default ReactForm
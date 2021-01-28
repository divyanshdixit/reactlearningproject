import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter = () => {
    const [count, setcount] = useState(0);

    function increment() {
        setcount(count+1);
    }

    function decrement() {
        
        if(count > 0){
            setcount(count-1);
        }else{
            alert('no -ve value')
        }
    }
    return(
        <>
            <h1> Count : {count}</h1>
            <Button variant="contained" color="secondary" onClick={increment}> 
                <AddIcon/> 
            </Button>
            <Button variant="contained" color="secondary" onClick={decrement}>
                <RemoveIcon/> 
            </Button>
        </>
    )
}

export default Counter;
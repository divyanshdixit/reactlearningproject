import React from 'react';

const Food = (props) => {
    if(props.category == 'veg'){
        return(
            <>
    
                 <p> Paneer</p>
                 <p> Paneer 2</p>
            </>
        )
    }else{
        return(
            <>
    
                 <p> Not Paneer</p>
                 <p> Paneer 2</p>
            </>
        )
    }
}

export default Food;
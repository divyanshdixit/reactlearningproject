import React from 'react';

const ItemLists = (props) => {
   
    return(
        <>
            <li id={props.id} onClick={ () => props.onClick(props.id)}> 
                {props.val} 
            </li>
        </>
    )
}

export default ItemLists;
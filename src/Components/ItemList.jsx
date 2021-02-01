import React from 'react';

const ItemLists = (props) => {
    function deleteItem(event) {
        console.log('deleted');
    }
    return(
        <>
            <li id={props.id} onClick={ () => props.onClick(props.id)}> 
                {props.val} 
            </li>
        </>
    )
}

export default ItemLists;
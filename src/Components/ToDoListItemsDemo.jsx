import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';

const ToDoListItemsDemo = ({listItem, onClick}) => {

    return (
        <div>
            <ol>
                {
                    listItem.map( (val, i) => {
                        return  <li onClick={ () => onClick(i)} key={i} id={i}> {val} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default ToDoListItemsDemo;
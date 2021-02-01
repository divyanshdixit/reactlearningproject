import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ItemLists from './ItemList';
import { AssignmentIndSharp } from '@material-ui/icons';

const ToDoApp = () => {

    const [state, setstate] = useState({
        item:''
    });

    const [lists, setLists] = useState([])

    function changeEvent(event) {
        const {name, value} = event.target;

        setstate( (prev) => {
            return{
                ...prev, // item:''
                [name] : value // ['item'] : value
            }
        })
    }

    function addItem(event) {
        setLists( (oldItems) => {
            return [...oldItems, state.item] 
        })

        setstate( () => {
            return {
                item:''
            }
        })
    }

    function deleteItems(id) {
        setLists( (oldItems) => {
           return oldItems.filter( (elem, index) => {
                return index !== id; // 0 !== 0, 1!==0
            })
        })
    }

    return(
        <>
            <h1> To Do List </h1>
            <input type="text" name="item" placeholder="Enter your item name" onChange={changeEvent} value={state.item}/>
            <Button variant="contained" color="secondary" onClick={addItem}> 
                <AddIcon/> 
            </Button>

            <ol>
                {lists.map( (val, index) => {
                    return <ItemLists val={val} key={index} id={index} onClick={deleteItems}/>
                })}
            </ol>
        </>
    )
}

export default ToDoApp;
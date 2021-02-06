import React, {useState} from 'react'
import ToDoListItemsDemo from './ToDoListItemsDemo'

const TodoAppDemo = () => {

    const [itemValue, setItemValue] = useState({
        item: ''
    })

    const [listItem, setListItem] = useState([])

    const changeItem = (e) => {
        const {name, value} = e.target;
        setItemValue( (prev) => {
            return {
                ...prev,
                [name] : value  
            }
        })

        // setItemValue({
        //     [name] : value
        // })
    }

    const clickHandler = () => {
            setListItem( (prevItem) => {
                return [
                    ...prevItem, itemValue.item
                ]
            });

            setItemValue( {
                item: ''
            })
        }
    
    const deleteItem = (id) => {
        console.log(`deleted ${id}` )
        setListItem( (prevItem) => {
            return prevItem.filter( (item, index) => { // [0,1]
                return index !== id; // 0 !== 1 => [1]
            })
        })
    }
    return (
        <div>
            <h1> To Do List </h1>
            <input type="text" name="item" placeholder="Enter your item name" value={itemValue.item} onChange={changeItem} />
            <button onClick={clickHandler}> + </button>
            
            <ToDoListItemsDemo listItem={listItem} onClick={deleteItem} />
        </div>
    )
}

export default TodoAppDemo

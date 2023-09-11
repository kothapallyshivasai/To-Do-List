import React, { useState } from 'react'

export default function TodoList() {
  
  let [listItems, setListItems] = useState([]);
  let [newItem, setNewItem] = useState("");

  let addItemFunction = () => {
    if(newItem === "")
    {
      return
    }
    else{
      setListItems([...listItems, newItem])
      setNewItem("")
    }
  }

  let deleteItem = key => {
    let array = [...listItems]
    array.splice(key, 1)
    setListItems(array)
  }

  let editItem = key => {
    let item = listItems[key]
    deleteItem(key)
    setNewItem(item)
  }
  
  return (
    <>
      <input type='text' name='newItem' id='newItem' value={newItem} onChange={event => setNewItem(event.target.value)} />
      <button onClick={() => addItemFunction()}>Save</button>
      <br />
      <ul>
      {listItems.map((x, key) => <li>{x}
      <button onClick={() => editItem(key)}>Edit</button>
      <button onClick={() => deleteItem(key)}>Delete</button> 
      </li>)}    
      </ul>
    </>
  ) 
}

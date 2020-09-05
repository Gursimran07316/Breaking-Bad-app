import React from 'react'
import {useState} from 'react'
const Input=({setQuery})=>{
  const[input,handleInput]=useState('');
 const handler=e=>{
handleInput(e.target.value);
setQuery(e.target.value);
  }
  return (<div className='center'>
    <input type="text" 
    value={input} 
    onChange={(e)=>handler(e)} 
    autoFocus
    placeholder='Search Charachter...'/>
    </div>)
}
export default Input
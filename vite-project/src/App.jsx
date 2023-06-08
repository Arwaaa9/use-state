/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todo,setTodo]=useState("")
  const [list,setList]=useState([])
  const list1 = ()=>{
    setList([...list,todo])
  }
  return (
    <>
    <h1><label> Enter Your Todo List </label></h1>
    <br></br> 
    <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button onClick={list1}>submit</button>
     
      <ul>{list.map((item)=>{
        return (
          <li key={item}>{item}</li>
        )
      })}</ul>
    
    </>
   
  )
}
export default App

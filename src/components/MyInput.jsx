import React, {useState} from 'react'

const MyInput = (props) => {
    const [number , setNumber] = useState(0);
    const [title , setTitle] = useState("lets");
    function plus () { 
       return setNumber(number + 1)
    }
    function minus () { 
       return setNumber(number - 1)
    }
    function logInput(e){
        e.preventDefault()
        console.log('log - ' + title +" "+ number); 
        document.querySelector('.input').value = "";
        setTitle("lets");
    }
  return (
    <div>
        <form className="form">
        <h1>{title}</h1>
        <input className="input"{...props} onChange={event => setTitle(event.target.value)}/>
        <button onClick={logInput}> play</button>
        </form>
        <h2>{number}</h2>
        <button onClick = {plus}>+</button>
        <button onClick = {minus}>-</button>
    </div>
  )
}

export default MyInput

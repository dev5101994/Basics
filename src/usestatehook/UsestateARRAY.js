import React, { useState } from 'react'

const Usestate2 = () => {

    const[items,setItem]=useState([])

    function addItems(){

        setItem([...items,{//object Array andar hai     //spread operater array  copy hai
            id:items.length,
            value:"Pen"
        }])
    }
    return (

        
        <>
        <h1>Use State Arry</h1>
<ol>
    {items.map(items=>(
        <li key={items.id}>{items.value}</li>
    ))}
</ol>
<button onClick={addItems}>Add items</button>
        </>
    )
}

export default Usestate2
//Yoshita Jain 
//ARRAY useState=use in map function  

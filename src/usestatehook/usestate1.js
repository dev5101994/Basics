import React, { useState } from 'react'

function Usestate1() {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>UseState</h1>
            <h1>{count}</h1>
            <button onClick={Increment}>INCREMENT</button>
            <button onClick={Decrement}>DECREMENT</button>
            {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
        </>
    )
}

export default Usestate1

//Youtube channel sony sangha
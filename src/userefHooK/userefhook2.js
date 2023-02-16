import React, { useRef } from 'react'

function Userefhook2() {
    const inputRef = useRef(null)

    function handleInput() {
        console.warn("function call")
        // inputRef.current.value = "1000"
        // inputRef.current.focus();
        inputRef.current.style.color = "red"
        // inputRef.current.style.display = "none"
    }
    return (
        <>
            <h1>userefhook2</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </>
    )
}

export default Userefhook2
//code step by step
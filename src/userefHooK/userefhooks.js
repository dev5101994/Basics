import React, { useRef, useState } from 'react'

const Userefhooks = () => {

    const refElement = useRef("");
    const [name, setName] = useState("Devansh");
    console.log(refElement)

    function Reset() {
        setName("");
        refElement.current.focus()
    }
    function handleInputChange() {
        refElement.current.style.color = "blue";
    }
    return (
        <>
            <h1>userefhooks</h1>
            {/* <input type="text" value={name} onchange={(e) => setName(e.target.value)}></input> */}
            <input ref={refElement} value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleInputChange}>handleInputChange</button>
        </>
    )
}

export default Userefhooks

//Yoshita Jain
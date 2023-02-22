import React, { useRef } from 'react'

function Uncontrolled() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)

    const submitForm = (e) => {

        e.preventDefault()
        console.warn("input field 1 value", inputRef.current.value)
        console.warn("input field 2 value", inputRef2.current.value)
    }

    return (
        <>
            <h1>Uncontrolled</h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef} type="text" /> <br /><br />
                <input ref={inputRef2} type="text" /> <br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled


//youtube=code step by step

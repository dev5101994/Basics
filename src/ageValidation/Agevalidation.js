import React, { useState } from 'react'


function Agevalidation() {
    const ERR_MSG = "Age must be Greater then 18."

    const [text, setText] = useState("");
    const [isError, setError] = useState(false)

    const handleTextInput = (e) => {
        setError(false);
        console.log(e.target.value)
        setText(e.target.value);

        if (e.target.value < 18) {
            setError(true);

        }


    }
    return (
        <>
            <h1>Agevalidation</h1>
            {/* <input value={text} onChange={handleTextInput} /> */}
            <input value={text} onChange={handleTextInput}></input>
            {
                isError ? ERR_MSG : null
            }
        </>
    )
}

export default Agevalidation

//Youtube =itsCodingDoctor,IBM ReactJs Interview - Fresher

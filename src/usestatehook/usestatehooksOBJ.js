import React, { useState } from 'react'

const UsestatehooksOBJ = () => {

    const [allvalues, setvalues] = useState({ firstname: "devansh", secondname: "Sharma" });

    function update() {
        setvalues({ ...allvalues, firstname: "Yoshita" })
    }
    return (
        <>
            <h1>UsestatehooksOBJ</h1>
            <h1>my name is firstName is {allvalues.firstname} my second name is{allvalues.secondname} </h1>
            <button onClick={update}>Update</button>
        </>
    )
}

export default UsestatehooksOBJ;

//Yoshita Jain
//use Usestate for {...spreadObject}


import React, { useState } from 'react'

function Controlled() {
    let [val, setVal] = useState("");
    let [item, setItem] = useState("");
    return (
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <h1>Value={val}</h1>
        </>
    )
}

export default Controlled

//youtube=code step by step
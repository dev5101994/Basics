import React, { useState, useMemo } from 'react'

const Usememo = () => {
    const [add, setAdd] = useState(0)
    const [sub, setSubtract] = useState(100)


    // const multiplay = () => {
    //     console.log("----------------")
    //     return add * 10;
    // }

    const multiplication = useMemo(
        function multiplay() {
            console.log("----------------")
            return add * 10;
        }, [add])

    return (

        <>
            <h1>usememo</h1>
            <span>{multiplication}</span>
            <br />
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span>
            <br />
            <button onClick={() => setSubtract(sub - 1)}>Subtraction</button>
            <span>{sub}</span>
        </>
    )
}

export default Usememo
// Yoshita Jain//
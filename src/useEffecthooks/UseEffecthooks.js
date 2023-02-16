import React, { useState, useEffect } from 'react'

const useEffecthooks = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState("Ram")

    useEffect(() => {
        console.log("component mounted")
    }, [data])

    function updateCount() {

        setCount(count + 1)
    }

    function updateData() {
        setData("Seeta")
    }

    return (
        <>
            <h1>Button clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
            <button onClick={updateData}>Update Data</button>
        </>
    )
}

export default useEffecthooks

//Yoshita Jain//
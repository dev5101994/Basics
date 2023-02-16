import React, { useCallback, useState } from 'react'
import ChildA from './ChildA';
const UseCallbacks = () => {

    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
    // const Lerning = () => {
    //     //some Operation
    // }

    const Lerning = useCallback(() => {
        //some operation

        // }, [])//EMPTY ARRY render for the firsttime error
    }, [count])
    return (
        <>
            <h1>UseCallback</h1>
            <ChildA Lerning={Lerning} />
            <h1>{add}</h1>
            <br />
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 2)}>Count</button>
        </>
    )
}

export default UseCallbacks

//Yoshita Jain//
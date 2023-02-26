import { Button } from 'antd'
import React, { useState } from 'react'

function HOC() {
    return (
        <>
            <h1>HOC</h1>
            <div style={{ paddingLeft: "45%" }}>
                <HOCCred cmp={Counter} />
                <HOCCblue cmp={Counter} />
                <HOCCgreen cmp={Counter} />
            </div>
        </>
    )
}
function HOCCred(props) {
    return <h1 style={{ backgroundColor: 'red', width: 100, height: 140 }}><props.cmp /></h1>
}

function HOCCblue(props) {
    return <h1 style={{ backgroundColor: 'blue', width: 100, height: 140 }}><props.cmp /></h1>
}

function HOCCgreen(props) {
    return <h1 style={{ backgroundColor: 'green', width: 100, height: 140 }}><props.cmp /></h1>
}

function Counter() {

    const [count, setCount] = useState(0);
    return <div>
        <h3>{count}</h3>
        <Button onClick={() => setCount(count + 1)}>Update</Button>
    </div>
}

export default HOC

//Code step by step
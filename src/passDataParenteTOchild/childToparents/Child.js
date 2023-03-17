import React from 'react'

function Child(props) {
    const data = { name: "devansh", email: "admin@gmail.com" }
    return (
        <>
            <h1>Child</h1>
            <button onClick={() => props.alert(data)}>Click me</button>
        </>
    )
}

export default Child


// https://www.youtube.com/watch?v=GStKM1PQkmI&ab_channel=CodeStepByStep
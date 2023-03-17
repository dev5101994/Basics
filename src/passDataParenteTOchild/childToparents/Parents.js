import React from 'react'
import Child from './Child'

function Parents() {

    function parentAlert(data) {
        console.log(data)
        alert("Hello")
    }

    return (
        <>
            <h1>Parents</h1>
            <Child alert={parentAlert} />
        </>
    )
}

export default Parents


// https://www.youtube.com/watch?v=GStKM1PQkmI&ab_channel=CodeStepByStep
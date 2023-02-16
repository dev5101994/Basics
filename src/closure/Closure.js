import React from 'react'

function Closure() {

    let data = 10;
    function test() {
        let a = 100; //lexical scope
        console.warn(data)
    }
    // console.log(a);
    test();
    return (
        <h1>Closure</h1>
    )
}

export default Closure

//code step by step
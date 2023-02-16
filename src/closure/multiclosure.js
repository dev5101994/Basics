import React from 'react'

function multiclosure() {

    let a = 100
    return function inner() {
        return a
    }
}
let inner = multiclosure();
console.log(inner())
// console.dir(inner)
// return (
//     <h1>Multiclosure</h1>
// )


export default multiclosure
import React from 'react'

function hoistingA() {

    return (
        <>
            <h1>hoistingA</h1>
            <h1 style={{ color: "red" }}>Hoisting is JavaScript's default behavior of moving declarations to the top.</h1>
            <h3 style={{ color: "blue" }}>Hoisting is JavaScript's default behavior of moving declarations to the top.</h3>
            <h4 style={{ color: "blue" }}>In other words; a variable can be used before it has been declared.</h4>

            x = 5; // Assign 5 to x
            <br />
            elem = document.getElementById("demo"); // Find an element
            <br />
            elem.innerHTML = x;                     // Display x in the element
            <br />
            var x; // Declare x
            <br />
        </>



    )
}

export default hoistingA
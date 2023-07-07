import React, { useMemo, useState } from "react";

function Usememo2() {
    const [incre, setIncre] = useState(0);
    const [decre, setDecre] = useState(0);

    function increment() {
        setIncre(incre + 1);
    }
    function decrement() {
        setDecre(decre - 1);
    }

    const isEven = useMemo(() => {
        console.log("Increment is running");
        return incre % 2 === 0;
    }, [incre])


    return (
        <>
            <h1>
                {incre} and {decre}
            </h1>
            <button onClick={increment}>Increment</button>
            <span>{isEven ? "Even" : "odd"}</span>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}
export default Usememo2;

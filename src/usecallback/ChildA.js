import React, { memo } from 'react'

const ChildA = (Lerning) => {
    console.log("Child Component")
    return (
        <>
            <h1>Child</h1>
        </>
    )
}

export default memo(ChildA)
// coverup with memo so stop re


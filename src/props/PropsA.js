import React from 'react'
import PropsB from './PropsB'

export default function PropsA() {
    return (

        <div>
            <h1>Hello Props</h1>
            {/* <PropsB text="Hello Props............" /> */}
            {/* <PropsB text={{ name: "peter" }} /> */}
            <PropsB text={{ name: "peter" }} data="Profile Data" />
        </div>
    )
}
{/* Code step by step */ }
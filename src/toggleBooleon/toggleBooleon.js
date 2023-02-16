import React, { useState } from 'react'
import { Switch } from 'antd'
function ToggleBooleon() {

    const [toggle, setToggle] = useState(false)

    function toggler() {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <>
            <h1>toggleBooleon</h1>
            <Switch onClick={toggler} />
            {toggle ? <span>Well done it change me</span> : <span>Wow still thr same old</span>}
        </>
    )
}

export default ToggleBooleon
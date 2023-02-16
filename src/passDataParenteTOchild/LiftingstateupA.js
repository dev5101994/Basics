import React from 'react'
import LiftingstateupB from './LiftingstateupB'

function LiftingstateupA() {

    function getData(data) {
        console.log(data)

    }

    return (
        <>
            <div>LiftingstateupA</div>
            <LiftingstateupB getData={getData} />
        </>
    )
}

export default LiftingstateupA

//Yoshita Jain: LiftingStateUp=(call child to parent)
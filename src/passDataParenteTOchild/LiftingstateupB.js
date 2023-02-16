import React, { useState } from 'react'



function LiftingstateupB(props) {

    const [name, setName] = useState();

    function handleSubmit(e) {
        // e.preventDefault();
        props.getData(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LiftingstateupB
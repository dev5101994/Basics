import React from 'react'

function Mapvsforeach() {


    const data = [1, 2, 3, 4, 5];

    // ------------------FOREACH-----------------------------------------------------------------------

    let result = data.forEach((item) => {
        console.warn(item)
        return item * 10
    })
    console.log(result)


    // -------------------MAP------------------------------------------------------------

    // let result = data.map((item) => {
    //     console.warn(item)
    //     return item * 10
    // })
    // console.log(result)


}

export default Mapvsforeach
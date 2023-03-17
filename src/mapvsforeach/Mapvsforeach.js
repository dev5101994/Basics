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




// sandbox

//map
// const numArr = [1, 2, 3];

// const res = numArr.map((e) => e * 2);

// console.log("res",res);

// //ForEach
// const res2=numArr.forEach((val,i,arr)=>(arr[i]=val*2));
// console.log("res2",res2)
// console.log("numArr",numArr)//for each mutes the num array
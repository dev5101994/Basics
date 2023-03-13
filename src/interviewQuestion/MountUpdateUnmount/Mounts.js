// compount didmount(mount)

useEffect(() => {

}, [])

//component update
useEffect(() => {

}, [user])

//unmounting(Component willmount) = wewe can write logic here for cleanup operation
//The CleanUp Code can be (Cancelling Subscription,Timers,or removing even EventHandelers)
useEffect(() => {

    return (() => {

    })
}, [])
// https://www.youtube.com/watch?v=DTlmk6QeOHY&ab_channel=Codevolution
//=(https://www.youtube.com/watch?v=RapcagVtB-0&t=515s&ab_channel=Dev.Aditya)
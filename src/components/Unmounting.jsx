import {useEffect} from 'react'
const Unmounting=()=>{
    useEffect(()=>{
        return ()=>{
            console.log('This is unmounting Phase');
        }
    })
    return(
        <>
        <h1>In order to have this hook run when the component is unmounted, we need to return a function from the hook. If we want cleanup function to run only when component has unmounted, we need to set an empty array. If we set one or more variables in the dependency array, cleanup will run at every re-render.</h1>
        </>
    )
}
export default Unmounting;
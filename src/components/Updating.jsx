import {useEffect} from 'react'
const Updating=()=>{

    useEffect(()=>{
    console.log("This is updating phase")
    },[]);
    return(
        <>
        <h1>In order to have this hook run when the component is updated (this includes mounting), we need to set at least one variable as hook's dependency.</h1>
        </>
    )
}
export default Updating;
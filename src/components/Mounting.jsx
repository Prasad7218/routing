import {useEffect} from 'react'
const Mounting=()=>{

     useEffect(() => {
     console.log("this is mounting phase");
        }, []);
    return(
        <>
        <h1>In order to have this hook run only once (when a component is mounted), we need to set an empty array as a hook dependency.

    </h1>
        </>
    )
}
export default Mounting;
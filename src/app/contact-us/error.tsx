"use client"
import { useEffect } from "react";

const ContactError = ({error}: {error: Error}) => {
    
    useEffect(()=>{
        console.log(error)
    }, [])
    
    return ( 
        <>
            <h1 className="text-red-600">soemething wrong about fetching data! please check your conection</h1>
        </>
     );
}
 
export default ContactError;
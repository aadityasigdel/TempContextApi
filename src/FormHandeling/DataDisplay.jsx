import { useState } from "react";

export default function DataDisplay (){
    const [data,setdata] = useState(0)
     function handlereq(){
       const result =  localStorage.getItem('data');
        setdata(result)
    }
    return(
        <>
            {data}
            <button onClick={handlereq}>submit</button>
        </>
    )
}
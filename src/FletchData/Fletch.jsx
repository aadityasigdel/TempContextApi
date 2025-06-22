import { useEffect, useState } from "react"



export default function Fetch(){
    const [data,setdata] = useState([])

            useEffect(()=>{
                fetch("https://dog.ceo/api/breeds/image/random")
                .then((res)=>res.json())
                .then((data)=>setdata(data))
       
        },[])
                 console.log(data)
    return(
        <>
        {data ? (<img src ={data.message} />):(<h1> error</h1>)}
        </>
    )
}
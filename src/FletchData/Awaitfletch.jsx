import { useEffect, useState } from "react"



export default function FetchAwait() {
    const [data, setdata] = useState([])

    const handlefetch = async () => {
        const Result = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = Result.json()
        setdata(data)

    }

    useEffect(() => {
        handlefetch()

    }, [])
    console.log(data)
    return (
        <>
            {data ? (<img src={data.message} />) : (<h1> error</h1>)}
        </>
    )
}
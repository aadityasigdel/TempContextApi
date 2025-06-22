import { useState } from "react"

export default function Form() {

    const [data, setdata] = useState({
        Email: '',
        Pass: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setdata((prev) => ({
            ...prev,
            [name]: value
        }));
    };




  
        function handlesubmit() {
            alert(`${data.Email}`)
            localStorage.setItem('data',JSON.stringify(data))
        }

     return (
        <>
            <div>
                <form onSubmit={handlesubmit} className="flex">
                    <input type="text" onChange={handleChange} placeholder="Email" name="Email" value={data.Email} />
                    <input type="text" onChange={handleChange} placeholder="Password ....." name="Pass" value={data.Pass} />
                    <button type="Submit">Submit</button>
                </form>

            </div>
        </>
    )
}
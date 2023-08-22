import React, { useState } from 'react';
import Axios from 'axios'

export default function PostForm() {
    const url = " 
    // your url here  
    "
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            data: data.date,
            iduser: parseInt(data.iduser)

        })
            .then(res => {
                console.log(res.data)
            })

    }


    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type='text'></input>
                <input onChange={(e) => handle(e)} id="data" value={data.date} placeholder="date" type='date'></input>
                <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type='number'></input>
                <button>Submit</button>
            </form>
        </div >
    )
}

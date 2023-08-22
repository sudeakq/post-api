import React from 'react'
import axios from 'axios'

export default function PostForm() {
    return (
        <div>
            <form>
                <input placeholder="name" type='text'></input>
                <input placeholder="data" type='data'></input>
                <input placeholder="iduser" type='number'></input>
            </form>
        </div>
    )
}

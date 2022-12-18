import React, { useState } from 'react'
import axios from 'axios'
import "./port.css"

export default function QuatePage() {
    const [quote, setquote] = useState("")
    let allQutes = ["quote1", "quote2", "quote3"]
    const [count, setCount] = useState(0)

    async function getQuote() {
        let response = await axios.get("https://api.quotable.io/random")
        console.log(response.data.content);
        setquote(response.data.content)

        // if (count < allQutes.length) {

        //     setquote(allQutes[count])
        //     setCount(count + 1)
        // } else {
        //     setCount(0)
        //     setquote(allQutes[count])
        // }

    }

    return (
        <div className='main-container'>
        <div className='container'>
            <h1 className='para' >{quote}</h1>
            <button className='btn' onClick={getQuote}>quote for you</button>
        </div>
      </div>  
    )
}

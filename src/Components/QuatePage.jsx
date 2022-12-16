import React, { useState } from 'react'
import axios from 'axios'

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
        <div>
            <button onClick={getQuote}>quote for you</button>
            <h1>{quote}</h1>
        </div>
    )
}

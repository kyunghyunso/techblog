import React, { useEffect, useState } from 'react'

import Unit from './Unit'
import axios from 'lib/axios'

export default function Board(){

    const [data, setData] = useState([])

    useEffect(()=>{
        (async function reqData(){
            let req = await axios.get('/blog/articles/')
            setData(req.data)
        })();        
    },[])

    const list = data.map((item, index)=>{
        return(
            <Unit key={"article"+index} data={item}/>
        )
    })

    return(
        <ul className="board">
            {list}
        </ul>
    )
}
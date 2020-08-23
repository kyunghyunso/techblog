import React, {useState} from 'react'

export default function Unit({data}){

    const [on ,setOn] = useState(false)

    return(
        <li onClick={()=>{setOn(!on)}}>
            <div className="title">
                <span>{data.title}</span>
                <span>{data.author}</span>
                <span>{data.date}</span>
            </div>
            <div className={"article " + (on?"on":"")}>
                {data.text}
            </div>
        </li>
    )
}
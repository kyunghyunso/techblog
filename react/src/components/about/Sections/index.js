import React from 'react'
import styles from './section.module.scss'
import sections from './sections.json'

export default function Section(){

    let list = sections.map((item, index)=>{
        return(
            <Unit key={"section"+index} title={item.title} text={item.text}/>
        )
    })

    return(
        <div className={styles.sections}>
            {list}
        </div>
    )
}

function Unit({title, text, author, imgUrl}){
    return(
        <div className={styles.section}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}
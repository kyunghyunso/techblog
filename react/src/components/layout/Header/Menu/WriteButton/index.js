import React from 'react'
import styles from './button.module.css'
import {useHistory} from 'react-router-dom'

export default function WriteButton(){

    const history = useHistory()

    const routeChange = () =>{ 
        let path = `/blog/write`; 
        history.push(path);
    }

    return(
        <button onClick={()=>routeChange()} className={styles.button}>글쓰기</button>
    )
}
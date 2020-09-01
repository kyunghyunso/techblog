import React from 'react'
import styles from './index.module.css'

import MetaInfo from './MetaInfoCard'

export default function Unit({data, id}){

    return(
        <li className={styles.section}>
            <div className={styles.textbox}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.abstract}>{data.abstract}</p>
                <MetaInfo {...data}/>
            </div>
            {data.thumbnailUrl &&
                <div className={styles.imagebox}>
                    <img src={data.thumbnailUrl}/>
                </div>
            }
        </li>
    )
}
import React from 'react'
import styles from './index.module.css'

import Moment from 'react-moment'

export default function MetaInfoCard(article){

    return(
        <div className={styles.container}>
            <img src={article.author.imgUrl}/>
            <div className={styles.describe}>
                <p className={styles.author}>{article.author.position+"."+article.author.nickname}</p>
                <p className={styles.article}>
                    <Moment 
                        format ={"YYYY/MM/DD"}
                        unix
                        date={article.updated._seconds}
                    />
                </p>
            </div>
        </div>
    )
}
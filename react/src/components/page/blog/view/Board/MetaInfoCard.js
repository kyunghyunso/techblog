import React from 'react'
import styles from './index.module.css'

export default function MetaInfoCard(article){
    console.log(article)
    return(
        <div className={styles.container}>
            <img src={article.author.imgUrl}/>
            <div className={styles.describe}>
                <span>{article.author.position}</span>
                <span>{article.updated}</span>
            </div>
        </div>
    )
}
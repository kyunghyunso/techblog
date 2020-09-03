import React from 'react'
import styles from './index.module.css'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import MetaInfoCard from '@components/common/MetaInfoCard'

import { Viewer } from '@toast-ui/react-editor';

export default function ArticleViewer({article}){

    if(!article){return null}
    return(
        <div className={styles.viewer}>
            <div className={styles.header}>
                <h1 className={styles.title}>{article.title}</h1>
                <MetaInfoCard {...article}/>
            </div>
            <Viewer
                initialValue={article.content}
            />
        </div>
    )
}

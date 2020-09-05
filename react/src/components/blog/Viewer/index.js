import React from 'react'
import styles from './index.module.css'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import MetaInfoCard from '@components/common/MetaInfoCard'
import EditButtons from '@components/blog/Board/Unit/EditButtons'
import { Viewer } from '@toast-ui/react-editor';

import { connect } from 'react-redux';

function ArticleViewer({article, id, auth}){

    if(!article){return null}
    return(
        <div className={styles.viewer}>
            <div className={styles.header}>
                <h1 className={styles.title}>{article.title}</h1>
                <MetaInfoCard {...article}/>
                {auth.user.id==article.author.id&&<EditButtons id={id} auth={auth}/>}
            </div>
            <Viewer
                initialValue={article.content}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    null
)(ArticleViewer)

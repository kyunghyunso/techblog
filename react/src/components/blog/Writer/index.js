import React, { useRef , useState} from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'


import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import { connect } from 'react-redux';
import axios from '@lib/Axios'

function Writer({auth}){

    const history = useHistory()
    const [title, setTitle] = useState('')
    const [abstract, setAbstract] = useState('')
    const editorRef = useRef(null)

    function handleSubmit(){
        const markDown = editorRef.current.getInstance().getMarkdown()
        console.log(markDown)
        axios.post('blog/articles', {
            title: title,
            abstract: abstract,
            content: markDown
          }, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          }).then(res=>{
            console.log(res.data)
            alert('작성 성공!')
            history.push(`/blog/list`)
          }).catch(err=>{
            console.log(err)
          })
    }

    return(
        <div className={styles.articleViewer}>  
            <input  className={styles.input}
                    type="text" 
                    value={title} 
                    placeholder="제목을 입력해주세요."
                    onChange={(event)=>setTitle(event.target.value)}/>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
            />
            <textarea
                    className={styles.abstract}
                    value={abstract} 
                    placeholder="요약문을 입력해주세요."
                    onChange={(event)=>setAbstract(event.target.value)}>
            </textarea>
            <button onClick={()=>{handleSubmit()}} className={styles.submit}>작성완료</button>
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
)(Writer)
import React, { useRef , useState} from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import { connect } from 'react-redux';
import axios from '@lib/Axios'

function Writer({auth, article, id}){

    const history = useHistory()
    const [title, setTitle] = useState(article?article.title:'')
    const [abstract, setAbstract] = useState(article?article.abstract:'')
    const editorRef = useRef(null)

    function handleSubmit(){
        const markDown = editorRef.current.getInstance().getMarkdown()
        if(article){
          console.log('수정요청')
          axios.patch(`blog/articles/${id}`, {
            title: title,
            abstract: abstract,
            content: markDown
          }, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          }).then(res=>{
            alert('수정 성공!')
            history.push(`/blog/list`)
          }).catch(err=>{
            console.log(err)
          })
        }else{
          axios.post(`blog/articles`, {
            title: title,
            abstract: abstract,
            content: markDown
          }, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          }).then(res=>{
            alert('작성 성공!')
            history.push(`/blog/list`)
          }).catch(err=>{
            console.log(err)
          })
        }
    }

    function handleDelete(){
      let check = window.confirm("정말로 삭제할까요?");
      if(check){
        axios.delete(`blog/articles/${id}`,{
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        }).then(res=>{
          alert('삭제 성공!')
          history.push(`/blog/list`)
        }).catch(err=>{
          console.log(err)
        })
      }      
    }

    return(
        <div className={styles.articleViewer}>  
            <input  className={styles.input}
                    type="text" 
                    value={title} 
                    placeholder="제목을 입력해주세요."
                    onChange={(event)=>setTitle(event.target.value)}/>
            <Editor
                initialValue={article?article.content:"내용을 입력해 주세요"}
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
            <div className={styles.buttons}>
              <button onClick={()=>handleSubmit()} className={styles.submit}>{article?"수정완료":"작성완료"}</button>
              {article&&<button onClick={()=>handleDelete()} className={styles.delete}>삭제</button>}
            </div>
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
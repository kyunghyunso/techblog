import React from 'react'
import styles from './editButton.module.scss'

import { useHistory } from 'react-router-dom'

import axios from '@lib/Axios'

export default function EditButtons({id, auth}){

    const history = useHistory()

    function handleEdit(e,articleId){
        e.preventDefault();
        history.push(`/blog/edit/${articleId}`)
    }

    function handleDelete(e,articleId){
        e.preventDefault();
        let check = window.confirm("정말로 삭제할까요?");
        if(check){
          axios.delete(`blog/articles/${articleId}`,{
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          }).then(res=>{
            alert('삭제 성공!')
            window.location.reload()
          }).catch(err=>{
            console.log(err)
          })
        }      
    }

    return(
        <div className={styles.buttons}>
            <button
                onClick={(e)=>handleEdit(e,id)}
                className={styles.edit}
            >수정</button>
            <button 
                onClick={(e)=>handleDelete(e,id)}
                className={styles.delete}
            >삭제</button>
        </div>
    )
}
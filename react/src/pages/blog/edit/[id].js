import React, { useEffect ,useState } from 'react'
import {useParams} from "react-router-dom";

import Writer from '@components/blog/Writer'

import axios from '@lib/Axios'

export default function Page(){

    let { id } = useParams();
    const [data, setData] = useState(null)

    useEffect(()=>{
        (async function reqData(){
            let req = await axios.get(`blog/articles/${id}`)
            setData(req.data.success)
        })();          
    },[])

    if(!data){return null}
    return(
        <Writer article={data.article} id={data.articleId}/>
    )
}
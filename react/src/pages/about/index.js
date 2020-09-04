import React, {useEffect, useState} from 'react'
import Profiles from '@components/about/Profiles'
import Sections from '@components/about/Sections'

import axios from '@lib/Axios'

export default function Page(){

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('/user/profiles')
        .then(res=>{
            setData(res.data.success)
        })
    }, [])

    return(
        <>
            <Sections />
            <Profiles profiles={data}/>
        </>
    )
}






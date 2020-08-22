import {useState} from 'react'

export default function Login(){

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    function handleSubmit(){
        console.log(id, pw)
    }

    return(
        <>
            <form onSubmit={()=>handleSubmit()}>
                <label>
                    <input 
                        type ="text" name="id" 
                        value={id} placeholder="ID"
                        onChange={(event)=>{setId(event.target.value)}}
                    />
                </label>
                <label>
                    <input 
                        type ="password" name="password" 
                        value={pw} placeholder="PASSWORD"
                        onChange={(event)=>{setPw(event.target.value)}}
                    />
                </label>
                <input type="submit" value="로그인"/>
            </form>
        </>
    )
}
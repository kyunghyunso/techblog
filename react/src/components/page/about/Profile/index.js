import React from 'react'
import styles from '../index.module.css'
import profiles from './profiles.json'

import { Link } from 'react-router-dom';

import homepage_icon from './personal-homepage-icon.svg'
import git_icon from './git-icon.svg'

export default function Profile(){

    let list = profiles.map((item, index)=>{
        return(
            <Unit key={"profile"+index} {...item}/>
        )
    })

    return(
        <div className={styles.profiles}>
            {list}
        </div>
    )
}

function Unit(user){
    return(
        <div className={styles.profilebox}>
            <div className={styles.profile_image}>
                <img src={user.imgUrl}/>
            </div>
            <div className={styles.profile_content}>
                <h1><span>{user.position+", "}</span><span>{user.name}</span></h1>
                <p>{user.introduce}</p>
                <p>
                    <Link to = {user.homepageUrl}>
                        <img src={homepage_icon}/>
                    </Link>
                    <Link to = {user.gitUrl}>
                        <img src={git_icon}/>
                    </Link>
                </p>
            </div>
        </div>
    )
}
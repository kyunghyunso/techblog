import React from 'react'
import styles from './menu.module.scss';

import { Link } from 'react-router-dom';
import menuList from './list.json'

export default function Menu(){

    let list = menuList.map((item, index)=>{
        return(
            <li key={"menu"+index} className={styles.list}>
                {item.external?
                    <a href={item.link}>{item.text}</a>:
                    <Link to={item.link}>{item.text}</Link>
                }
            </li>
        )
    })

    return(
        <ul className={styles.menu}>
            {list}
        </ul>
    )
}
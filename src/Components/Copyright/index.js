import React from 'react'
import style from './Copyright.module.css'

const Copyright = () => {

    const copyright ="Copyrights 2021. Sportstars.id All rights reserved"

    return (
        <>
            <footer className={style.container}>
                <div className={style.content}>
                    <p>&copy; {copyright}</p>
                </div>
            </footer>
        </>
    )
}

export default Copyright
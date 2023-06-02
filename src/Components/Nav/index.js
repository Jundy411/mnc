import React from 'react'
import style from './Nav.module.css'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {

    const nav = [
        "beranda", "bola", "balap", "ragam", "sportainment", "hobi", "data statistik", "multimedia", "index"
    ]

    return (
        <>
            <nav className={style.Nav}>
                <div className={style.content}>
                    <ul className={style.ul}>
                        {nav.map((item, index) => {
                            return <li key={index} className={style.li}>
                                {item}
                            </li>
                        })}
                    </ul>
                    <div className={style.search}>
                        <input type='text' placeholder="Search here..." className={style.searchInput}/>
                        <p><FaSearch /></p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
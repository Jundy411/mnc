import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import style from './style.module.css'

const TopNav = () => {


    const menu = [
        { id: 1, text: "RCTI+"},
        { id: 1, text: "Vision+"},
        { id: 1, text: "Okezone.com"},
        { id: 1, text: "SINDOnews.com"},
        { id: 1, text: "iNews.id"},
        { id: 1, text: "Buddyku"},
        { id: 1, text: <MdKeyboardArrowDown/>},
    ]
    const sosmed = [
        { id: 11, icon: <FaFacebookF /> },
        { id: 22, icon: <FaTwitter /> },
        { id: 33, icon: <FaInstagram /> },
        { id: 44, icon: <FaYoutube /> },
        { id: 55, icon: <FaTiktok /> },
    ]

    return (
        <>
            <div className={style.topNav}>
                <div className={style.topNavContent}>
                    <ul className={style.ul}>
                        {menu.map((data,index) => {
                            return <li className={style.li} key={index}>
                                {data.text}
                            </li>
                        })}
                        
                    </ul>
                    <ul className={style.ul}>
                        {sosmed.map((item,index) => {
                            return <li className={style.li} key={index}>
                                {item.icon}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav
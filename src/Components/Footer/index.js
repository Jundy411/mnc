import React from 'react'
import logoFooter from '../../Assets/svg/logoFooter.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import style from './Footer.module.css'

const Footer = () => {

    const about = [
        "Tentang Kami", "Disclaimer", "Kode Etik", "Term of Service", "Privacy Policy", "Kontak Kami"
    ]
    const kanal = [
        "beranda", "bola", "balap", "ragam", "sportainment", "hobi", "data statistik", "multimedia", "index"
    ]

    const sosmed = [
        { id: 1, icon: <FaFacebookF /> },
        { id: 2, icon: <FaTwitter /> },
        { id: 3, icon: <FaInstagram /> },
        { id: 4, icon: <FaYoutube /> },
        { id: 5, icon: <FaTiktok /> }
    ]
    return (
        <>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.logo}>
                            <img src={logoFooter} alt='logo footer' />

                            <p>Connect with us:</p>
                            <ul>
                                {sosmed.map((icon, index) => {
                                    return <li key={index} className={style.sosmed}>
                                        <p>{icon.icon}</p>
                                    </li>
                                })}
                            </ul>

                        </div>
                        <div className={style.about}>

                            <ul>
                                <li>
                                    <h4>about us</h4>
                                </li>
                                {about.map((data, index) => {
                                    return <li key={index}>
                                        {data}
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className={style.kanal}>
                            <ul>
                                <li style={{ listStyle: "none" }}>
                                    <h4>kanal utama</h4>
                                </li>
                                {kanal.slice(0, 6).map((data, index) => {
                                    return <li key={index} className={style.menu}>
                                        {data}
                                    </li>
                                })}

                            </ul>
                        </div>
                        <div className={style.kanals}>
                            <ul>
                                <li>
                                    <h4>&nbsp;</h4>
                                </li>
                                {kanal.slice(6, 10).map((data, index) => {
                                    return <li key={index}>
                                        {data}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={style.footerMobile}>
                <div className={style.contentMobile}>
                    <img src={logoFooter} alt='logo footer' />
                    <div className={style.about}>
                        <ul>
                            {about.map((data, index) => {
                                return <li key={index}>
                                    {data}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className={style.sosmeds}>
                        <ul>
                            {sosmed.map((icon, index) => {
                                return <li key={index} className={style.sosmed}>
                                    <p>{icon.icon}</p>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
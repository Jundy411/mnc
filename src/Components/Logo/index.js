import React from 'react'
import Alogo from '../../../src/Assets/svg/logo.svg'
import Iklan from '../../../src/Assets/svg/iklan.svg'
import styles from './Logo.module.css'
import {FaSearch, FaBars} from 'react-icons/fa'

const Logo = () => {
    return (
        <>
            <div className={styles.logoContainer}>
                <div className={styles.logoContent}>
                    <img src={Alogo} alt='logo'/>
                    <img src={Iklan} alt='iklan'/>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={styles.content}>
                    <div>
                        <p><FaBars/></p>
                    </div>
                    <div>
                        <img src={Alogo} alt='logo'/>
                    </div>
                    <div>
                        <p><FaSearch/></p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Logo
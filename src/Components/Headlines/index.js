import React from 'react'
import content from './content'
import style from './Headlines.module.css'
import {RxDotFilled} from 'react-icons/rx'


const Headlines = () => {
    return (
        <>
            {/*  */}
            <div className={style.container}>
                <div className={style.content}>
{/* desktop */}
                    <div className={style.boxContainer}>
                        {content.map((data, index) => {
                            return (
                                <div className={style.box} key={index}>
                                    <div>
                                        <img src={data.image} alt='ronaldo' />
                                    </div>
                                    <div className={style.boxContent}>
                                        <div className={style.line}>
                                            <h4>{data.genre}</h4>
                                            <p>{data.date}</p>
                                        </div>
                                        <h2>{data.title}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
{/* mobile */}
                    <div className={style.boxMobile}>
                        {content.map((data,index) => {
                            return (
                                <div key={index} className={style.contentMobile}>
                                    <div className={style.imageMobile}>
                                        <img src={data.image} alt={data.alt}/>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Headlines
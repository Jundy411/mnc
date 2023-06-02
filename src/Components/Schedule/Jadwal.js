import React from 'react'
import content from './content'

const Jadwal = () => {

    const text = {
        title : "Liga Inggris Premier League",
        time : "Rabu, 31 Maret 2021"
    }

    return (
        <>
            <div>
                <div>
                    <h3>{text.title}</h3>
                    <p>{text.time}</p>
                    {content.map((data,index) => {
                        return <div key={index}>
                            <img src={data.bendera} alt='bendera'/>
                            <p>{data.negara}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Jadwal
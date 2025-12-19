import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let t = setInterval(() => {
            let temp = new Date();
            setTime(temp);
            // console.log(time)
        }, 1000)

        return () => {
            clearInterval(t)
        }
    }, [])
    return (
        <div className='clock'>
            <div className='hour' style={{
                transform: `rotateZ(${time.getHours() * 30}deg)`
            }}>

            </div>
            <div className='min' style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`
          }}></div>
            <div className='sec'style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`
          }}></div>
        </div>
    )
}

export default Clock
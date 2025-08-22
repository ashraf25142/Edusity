import React, { useRef } from 'react'
import vid from '../../assets/college_vid.mp4'
import './vid.css'

function Vid({play,setplay}) {

    const closeVid = useRef(null);

    function close_vid(e){
        if(e.target===closeVid.current){
            setplay(false);
        }
    }

    return (
        <div ref={closeVid} className={`vid ${play?'':'hide'}`} onClick={close_vid}> 
            <video src={vid} controls autoPlay />
        </div>
    )
}

export default Vid;

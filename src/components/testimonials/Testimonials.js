import React, { useRef } from 'react'
import './Testimonials.css'
import arrow_forward from '../../assets/next-icon.png'
import arrow_backward from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



function Testimonials() {
    const slider = useRef();
    let xp =0;

    function forward(){
        if(xp>=-25 && window.innerWidth>'680'){
            xp-=25;
            slider.current.style.transform = `translateX(${xp}%)`
        }
        if(xp>=-50 && window.innerWidth<='680'){
            xp-=25;
            slider.current.style.transform = `translateX(${xp}%)`
        }

    }
    function backward(){
        if(xp<0 && window.innerWidth>'680'){
            xp+=25;
            slider.current.style.transform = `translateX(${xp}%)`
        }
        if(xp<0 && window.innerWidth<='680'){
            xp+=25;
            slider.current.style.transform = `translateX(${xp}%)`
        }
    }


    return (
        <div className='testimonials' id='testimonials'>
            <img src={arrow_forward} alt='' className='forward' onClick={forward}/>
            <img src={arrow_backward} alt='' className='backward' onClick={backward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt=''/>
                                <div className='dest'>
                                    <h1>Emily Williams</h1>
                                    <h2>Edusity, USA</h2>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt=''/>
                                <div className='dest'>
                                    <h1>William Jackson</h1>
                                    <h2>Edusity, USA</h2>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt=''/>
                                <div className='dest'>
                                    <h1>Emily Williams</h1>
                                    <h2>Edusity, USA</h2>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt=''/>
                                <div className='dest'>
                                    <h1>William Jackson</h1>
                                    <h2>Edusity, USA</h2>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials

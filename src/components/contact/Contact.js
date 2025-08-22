import React, { useState ,useRef,useEffect } from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
import HCaptcha from '@hcaptcha/react-hcaptcha';


function Contact() {

    const [result,setresult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3304e613-eb69-44c6-a727-980c2ac2112c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setresult(res.message);
            event.target.reset();
        }
        };

        // const [token, setToken] = useState(null);
        // const captchaRef = useRef(null);

        // const onLoad = () => {
        //     captchaRef.current.execute();
        // };

        // useEffect(() => {

        //     if (token)
        //     console.log(`hCaptcha Token: ${token}`);

        // }, [token]);


    return (
        <div className='contact' id='contact'>
            <div className='col-left'>
                <h1>Send us a message <img src={msg_icon} alt='' /></h1>
                <p>Feel free to reach out through contact form or find our contact information below. 
                    Your feedback, questions, and suggestions are important to us as we strive 
                    to provide exceptional service to our university community.
                </p>
                <p><img src={mail_icon} alt=''/> Contact@GreatStack.dev</p>
                <p><img src={phone_icon} alt=''/> +1 123-456-7890</p>
                <p><img src={location_icon} alt=''/> 77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</p>
            </div>
            <div className='col-right'>
                <form onSubmit={onSubmit}>
                    <label for="name">Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' id='name'/>
                    <label for="phone">Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' id='phone'/>
                    <label for='email'>Your Email</label>
                    <input type='email' name='email' placeholder='Enter your email' id='email'/>
                    <label for="msg">Write your messages here</label>
                    <textarea rows={6} placeholder='Enter your message' name='message' id='msg'/>
                    {/* <HCaptcha
                        sitekey='key'
                        onLoad={onLoad}
                        onVerify={setToken}
                        ref={captchaRef}
                    /> */}
                    <button type='submit'>Submit now <img src={arrow} alt=''/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact;

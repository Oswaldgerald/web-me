import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_on48dqa', 'template_0fnmwpf',
         form.current, 'ZLhUZKC4mNN4MSXrp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span >YOUR DATA </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user-email" placeholder="Enter your email address" />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join


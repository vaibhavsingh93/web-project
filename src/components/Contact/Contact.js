import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_5sfgblf",
            "template_s4sb3fj",
            form.current,
            "DXQVX3dzG3WjgJp37"
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email send");
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
     
  return (
    <section className="contact" id='contact'>
    <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
            <div className="column left">
                <div className="text">Get in Touch</div>
                <p>_______________________________________</p>
                <div className="icons">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <div className="info">
                            <div className="head">Name</div>
                            <div className="sub-title">Vaibhav Singh</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Address</div>
                            <div className="sub-title">B-104 Utkarsh Paradaise colony, Pithampur<br/>INDORE (M.P)</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email</div>
                            <div className="sub-title">vaibhavsingh1699@gmail.com</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fab fa-linkedin-in"></i>
                        <div className="info">
                            <div className="head">LinkedIn</div>
                            <div className="sub-title"><a href="https://www.linkedin.com/in/vaibhav-singh-110277225"target="blank">https://www.linkedin.com/in/vaibhav-singh-110277225</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="text">Message me</div>

                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <div className="fields">
                        <div className="field name">
                            <input type="text" placeholder="Name" id="name" name="user_name"/>
                        </div>
                        <div className="field email">
                            <input type="email" placeholder="Email" id="email"name="user_email"/>
                        </div>
                    </div>
                    <div className="field">
                            <input type="text" placeholder="Subject" id="subject" name="subject"/>
                        </div>  
                    <div className="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." id="message" name="message"></textarea>
                    </div>
                    <div className="button-area">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}
export default Contact

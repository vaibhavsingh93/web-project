import React from 'react'
import "./Home.css"
import btnImg from "../../assets/hireme.png"
import {Link} from "react-scroll"
const Home = () => {
  return (
   <section id='home'> 
   <div className='introContant'>
    <span className='hello'>Hello</span>
    <span className='introText'>I'm <span className='introName'>vaibhav</span><br/>
    Website Designer</span>
    <p className='introPara'> I have been working as a web developer for quite some <br/>time now.I believe I am a very ambitious person who <br/>loves to work on making the website work well. </p>
    <Link> <button className='btn'> <img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>

   </div>
   </section>
  )
}

export default Home;

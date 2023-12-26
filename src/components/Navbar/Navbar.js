import React,{ useState }  from 'react'
import "./Navbar.css"
import { NavLink,Route,Routes } from 'react-router-dom'
import Contact from "../Contact/Contact.js"
import Home from "../Home/Home.js"
import About  from '../About/About.js'
import Project from "../Projects/Projects.js"
import Skills from "../Skills/Skill.js"

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);  
  return (
    <div className='desktopMenu'>
    <nav className='navbar'>
<div className="logo"><a href="#">MyPortfo<span>lio.</span></a></div>
  <div className='desktopMenu'>
<NavLink to='/home' className='desktopMenuListItem'>Home</NavLink><span></span>
<NavLink to='/about' className='desktopMenuListItem'>About</NavLink><span></span>
<NavLink to='/projects' className='desktopMenuListItem'>Projects</NavLink><span></span>
<NavLink to='/skills' className='desktopMenuListItem'>Skills</NavLink><span></span>
<NavLink to='/contact' className='desktopMenuListItem'>Contact Me</NavLink><span></span>
</div>
</nav> 
              <Routes>
              <Route exact path="home"  element={<Home></Home>}>Home</Route> 
              <Route path="about"  element={<About></About>}>About</Route> 
              <Route path="projects"element={<Project></Project>}>Projects</Route> 
              <Route path="skills" element={<Skills></Skills>}>Skills</Route> 
              <Route path="contact" element={<Contact></Contact>}>Contact Me</Route> 
            </Routes>
            </div>
  )
}
export default Navbar;

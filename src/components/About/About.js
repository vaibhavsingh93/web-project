import React from 'react'
import "./About.css"
import Profile_pic from "../../assets/Vaibhav profile.jpg"
import CV from "../../assets/CV.pdf"

const About = () => {
return(

    <section className="about" id="about">
    <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="aboutContent">
            <div className="columnLeft">
                <img src={Profile_pic} alt=""/>
            </div>
            <div className="columnRight">
                <div className="text">I'm Vaibhav and I'm... </div>
                <p>  Born and brought up in Indore. I completed my B-tech with Mechanical Engineering from SD Bansal College Of Engineering affiliated to RGPV University, with an aggregate of 69.6 %.
                     My hobbies are net surfing, listening music. I am fresher and have no work experience in IT company.
                      My strength is that I can adapt quickly to any environment and I am Quick Learner.<br/>
                      I have a strong interest in software and Web development. 
                      The reason is I’d like to leverage my detail-oriented mind and apply the skills and knowledge that I have attained throughout my Internship and Training courses.
                       I see myself as a people-oriented person. I demonstrated this by working in projects in which I had been able to perform well. 
                       I want to be part of your company to further develop myself in the IT field and
                       to use my capabilities to serve both your company and your clients.
                    My short-term goal is to get placed in a reputed company like yours, which will allow me to enhance my skills and Knowledge. 
                    My long term goal is World tour with my Family. 
                    That’s all about me....</p>
                <a href={CV} download="CV">Download CV</a>
            </div>
        </div>
    </div>
</section>
)}
export default About

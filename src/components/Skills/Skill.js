import React from "react";
import "./Skill.css";
const Skill = () => {
  return (
    <section className="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="columnLeft">
            <div className="text">My creative skills & experiences.</div>
            <br />
            <p>
              <h3>PROBLEM SOLVING--</h3>Solving problems is the primary duty of
              any Developer,and I excel at it.My creative thinking and practice
              helps me solve any problem regardless of the complexity.
              <br />
              <h3>ADAPTABILITY--</h3>I consider myself a flexible
              person.Regardless of the situation, I always strive to get
              results.
              <br />
              <h3>TEAMWORK--</h3>I value teamwork because teamwork is a way of
              doing a work with low pressure and more accuracy.i enjoy working
              with others.
              <br />
              <h3>FAST LEARNER--</h3>Because of Mechanical Engineering
              background,coding is not familiar for me then I join a coding
              institute,thanks to my fast learning skills,in half month i was
              good familiar with most of programming languages i was able to
              design and makes simple projects.
              <br />
            </p>
          </div>
          <div className="columnRight">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C & C++</span>
                <span>80%</span>
              </div>
              <div className="line c"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>85%</span>
              </div>
              <div className="line React"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Node</span>
                <span>75%</span>
              </div>
              <div className="line node"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Express</span>
                <span>70%</span>
              </div>
              <div className="line express"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span>70%</span>
              </div>
              <div className="line MongoDb"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

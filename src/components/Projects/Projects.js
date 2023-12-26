import React from 'react';
import "./Projects.css";


const Projects = () => {
  return (
    <section className="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="servContent">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Design</div>

              <div className="project">
                <p>
                  <a
                    href="https://myproject-analog-clock-by-vaibhav.netlify.app"
                    target="blank"
                  >
                    <h4>--Analog clock--</h4>{" "}
                  </a>
                </p>
                <p>
                  <a
                    href="https://calculator-project-by-vaibhav.netlify.app"
                    target="blank"
                  >
                    <h4>--Calculator--</h4>{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-gamepad"></i>
              <div className="text"> Game </div>
              <br />
              <div className="project">
                <p>
                  <a
                    href="https://gameproject-tic-tac-toe.netlify.app"
                    target="blank"
                  >
                    <h4>--Tic-Tac-Toe--</h4>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">E-commerse site</div>
              <br />
              <p>Work in Progress......</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects

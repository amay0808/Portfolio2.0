import React from "react";
import "../components/HomePage.css";
import PatternRings from "../assets/images/pattern-rings.svg";
import ProfilePic from "../assets/images/profile-pic.webp";
import PatternCircle from "../assets/images/pattern-circle.svg";
import Icon1 from "../assets/images/icon-frontend-mentor.svg";
import Icon2 from "../assets/images/icon-github.svg";
import Icon3 from "../assets/images/icon-twitter.svg";
import Icon4 from "../assets/images/icon-linkedin.svg";
function HomePage() {
  return (
    <div>
      <p id="my-name">adrianmayfield</p>
      <div className="intro-section">
        <div classname="rings">
          <img src={PatternRings} alt="rings" className="rings-image" />
        </div>
        <div className="bio">
          <p id="greetings">Nice to meet you!</p>
          <p>
            I'm
            <span id="highlight-name"> Adrian.</span>
          </p>
          <div className="bio-details">
            <p id="description">
              Based in California's Central Valley, I'm a FullStack Developer
              dedicated to crafting user-friendly web applications.
            </p>
          </div>
          <button id="contact-btn">CONTACT ME</button>
        </div>
        <div className="bio-section">
          <div className="social-icons">
            <a
              href="https://www.frontendmentor.io/profile/amay0808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon1} alt="Frontend Mentor" />
            </a>
            <a
              href="https://github.com/amay0808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon2} alt="Github" />
            </a>
            <a
              href="https://twitter.com/amay0808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon3} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrianmayfield"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon4} alt="Linkedin" />
            </a>
          </div>
          <div>
            <div>
              <img
                src={PatternCircle}
                alt="Circle"
                className="pattern-circle"
              />
            </div>
            <img src={ProfilePic} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
      <section className="skills-section">
        <div classname="rings">
          <img src={PatternRings} alt="rings" className="skills-rings-image" />
        </div>
        <ul className="skills-list">
          <li className="skill-item">
            <h3>HTML</h3>
            <p>3 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>CSS</h3>
            <p>3 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>JavaScript</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>React</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>Node.JS</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>MongoDB</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>Express</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>Python</h3>
            <p>1 Years Experience</p>
          </li>
        </ul>
      </section>
      <section className="projects-section">
        <div>
          <button className="contact-btn-projects">CONTACT ME</button>
        </div>
        <h2 className="projects-tittle">Projects</h2>
        <ul className="projects-list">
          <li className="project-item">
            <img
              src={require("../assets/images/project-around-the-us.png")}
              alt="Project thumbnail"
              className="project-image"
            />
            <h3>Around the U.S</h3>
            <p>HTML CSS JavaScript</p>
            <button className="view-project-btn">View project</button>
            <button className="view-code-btn">View code</button>
          </li>
          <li className="project-item">
            <img
              src={require("../assets/images/project-around-the-us.png")}
              alt="Project thumbnail"
              className="project-image"
            />
            <h3>Around the U.S </h3>
            <p>HTML CSS JavaScript</p>
            <button className="view-project-btn">View project</button>
            <button className="view-code-btn">View code</button>
          </li>
          <li className="project-item">
            <img
              src={require("../assets/images/project-around-the-us.png")}
              alt="Project thumbnail"
              className="project-image"
            />
            <h3>Around the U.S </h3>
            <p>HTML CSS JavaScript</p>
            <button className="view-project-btn">View project</button>
            <button className="view-code-btn">View code</button>
          </li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Message
            <textarea name="message"></textarea>
          </label>
          <input type="submit" value="Send message" />
        </form>
      </section>
    </div>
  );
}

export default HomePage;

import React from "react";
import "../components/HomePage.css";

function HomePage() {
  return (
    <div>
      <p id="my-name">adrianmayfield</p>
      <div classname="oval-design">
        <div className="ovals"></div>
        <div className="ovals"></div>
        <div className="ovals"></div>
        <div className="ovals"></div>
        <div className="ovals"></div>
      </div>
      <div className="intro-section">
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
          <div>
            <img
              src={require("../assets/images/profile-pic.webp")}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
      <section className="skills-section">
        <h2>Skills</h2>
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
            <h3>Node</h3>
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
      <section className="projects">
        <h2>Projects</h2>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <li>Around the U.S</li>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <li>Around the U.S </li>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <li>Around the U.S </li>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
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

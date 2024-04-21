import React from "react";
import "../components/HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="ovals"></div>
      <div className="ovals"></div>
      <div className="ovals"></div>
      <div className="ovals"></div>
      <div className="ovals"></div>
      <div id="name">
        <p className="my-name">adrianmayfield</p>
        <div>
          <img
            src={require("../assets/images/profile-pic.webp")}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
      <div className="bio">
        <p>Nice to meet you!</p>
        <p>
          I'm
          <span className="highlight-name"> Adrian Mayfield.</span>
        </p>
        <div className="bio-details">
          <p className="description">
            Based in California's Central Valley, I'm a FullStack Developer
            dedicated to crafting user-friendly web applications.
          </p>
        </div>
        <button>Contact me</button>
      </div>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <h3>HTML</h3>
            <p>3 Years Experience</p>
          </li>
          <li>
            <h3>CSS</h3>
            <p>3 Years Experience</p>
          </li>
          <li>
            <h3>JavaScript</h3>
            <p>2 Years Experience</p>
          </li>
          <li>
            <h3>React</h3>
            <p>2 Years Experience</p>
          </li>
          <li>
            <h3>Node</h3>
            <p>2 Years Experience</p>
          </li>
          <li>
            <h3>MongoDB</h3>
            <p>2 Years Experience</p>
          </li>
          <li>
            <h3>Express</h3>
            <p>2 Years Experience</p>
          </li>
          <li>
            <h3>Python</h3>
            <p>1 Years Experience</p>
          </li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <h3>Around the U.S</h3>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <h3>Around the U.S </h3>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
        <img
          src={require("../assets/images/project-around-the-us.png")}
          alt="Project thumbnail"
          className="project-image"
        />
        <h3>Around the U.S </h3>
        <p>HTML CSS JavaScript</p>
        <button>View project</button>
        <button>View code</button>
      </section>

      <section id="contact">
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

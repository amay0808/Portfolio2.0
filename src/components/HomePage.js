import ContactForm from "../components/ContactForm.js";
import "../components/HomePage.css";
import PatternRings from "../assets/images/pattern-rings.svg";
import ProfilePic from "../assets/images/profile-pic.webp";
import PatternCircle from "../assets/images/pattern-circle.svg";
import Icon1 from "../assets/images/icon-frontend-mentor.svg";
import Icon2 from "../assets/images/icon-github.svg";
import Icon3 from "../assets/images/icon-twitter.svg";
import Icon4 from "../assets/images/icon-linkedin.svg";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import Project4 from "../assets/images/project4.png";

function HomePage() {
  return (
    <div className="top-page">
      <p className="my-name">adrianmayfield</p>
      <div className="intro-section">
        <div className="rings-image"></div>
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
          <a href="#contact-section">
            <button id="contact-btn">CONTACT ME</button>
          </a>
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
        <ul className="skills-list">
          <li className="skill-item">
            <h3>HTML</h3>
            <p>2 Years Experience</p>
          </li>
          <li className="skill-item">
            <h3>CSS</h3>
            <p>2 Years Experience</p>
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
        <div className="skills-rings-image"></div>
      </section>

      <section className="projects-section">
        <div>
          <a href="#contact-section">
            <button className="contact-btn-projects">CONTACT ME</button>
          </a>
        </div>

        <h2 className="projects-tittle">Projects</h2>
        <ul className="projects-list">
          <li className="project-item">
            <div className="project-image-wrapper">
              <img
                src={Project1}
                alt="Project thumbnail"
                className="project-image"
              />
              <a href="http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/">
                <button className="view-project-btn">View project</button>
              </a>
              <a href="https://github.com/synthesis-workshop/frontend.git">
                <button className="view-code-btn">View code</button>
              </a>
            </div>
            <h3>Project Synthesis</h3>
            <p>HTML CSS JavaScript</p>
          </li>
          <li className="project-item">
            <div className="project-image-wrapper">
              <img
                src={Project2}
                alt="Project thumbnail"
                className="project-image"
              />
              <a href="https://amay0808.github.io/se_project_aroundtheus/">
                <button className="view-project-btn">View project</button>
              </a>
              <a href="https://github.com/amay0808/se_project_aroundtheus.git">
                <button className="view-code-btn">View code</button>
              </a>
            </div>
            <h3>Around the U.S </h3>
            <p>HTML CSS JavaScript</p>
          </li>
          <li className="project-item">
            <div className="project-image-wrapper">
              <img
                src={Project3}
                alt="Project thumbnail"
                className="project-image"
              ></img>
              <a href="https://amay0808.github.io/se_project_coffeeshop/">
                <button className="view-project-btn">View project</button>
              </a>
              <a href="https://github.com/amay0808/se_project_coffeeshop.git">
                <button className="view-code-btn">View code</button>
              </a>
            </div>
            <h3>Practicum Coffee Shop </h3>
            <p>HTML CSS JavaScript</p>
          </li>
          <li className="project-item">
            <div className="project-image-wrapper">
              <img
                src={Project4}
                alt="Project thumbnail"
                className="project-image"
              />
              <a href="https://amay0808.github.io/se_project_react/#/">
                <button className="view-project-btn">View project</button>
              </a>
              <a href="https://github.com/amay0808/se_project_react.git">
                <button className="view-code-btn">View code</button>
              </a>
            </div>
            <h3>What to Wear (WTWR)</h3>
            <p>HTML CSS JavaScript</p>
          </li>
        </ul>
      </section>

      <div className="bottom-page">
        <section className="contact" id="contact-section">
          <div className="contact-text">
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>

            <div className="rings">
              <img
                src={PatternRings}
                alt="rings"
                className="rings-contact-image"
              />
            </div>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
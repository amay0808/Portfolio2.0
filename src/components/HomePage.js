import React from "react";
import "../components/HomePage.css";

function HomePage() {
return (
    <div>
        <div id="bio">
            <h1>Adrian Mayfield</h1>
            <p>Nice to meet you! I'm Adrian.</p>
            <p>
                Based in California's Central Valley, I'm a FullStack Developer
                dedicated to crafting user-friendly web applications.
            </p>
            <button>Contact me</button>
        </div>

        <div id="skills">
            <h2>Skills</h2>
            <h3>HTML</h3>
            <p>3 Years Experience</p>
            <h3>CSS</h3>
            <p>3 Years Experience</p>
            <h3>JavaScript</h3>
            <p>2 Years Experience</p>
            <h3>React</h3>
            <p>2 Years Experience</p>
            <h3>Node</h3>
            <p>2 Years Experience</p>
            <h3>MongoDB</h3>
            <p>2 Years Experience</p>
            <h3>Express</h3>
            <p>2 Years Experience</p>
            <h3>Python</h3>
            <p>1 Years Experience</p>
        </div>

        <div id="projects">
            <h2>Projects</h2>
            <img
                src={require("../assets/images/project-around-the-us.png")}
                alt="Project thumbnail"
                className="project-image"
            />
            <h3>Design portfolio</h3>
            <p>HTML CSS</p>
            <button>View project</button>
            <button>View code</button>
            {/* Add the rest of your projects here */}
        </div>

        <div id="contact">
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
        </div>
    </div>
);
}

export default HomePage;

import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Adrian Mayfiled</h1>

      <p>Nice to meet you! I'm Adrian.</p>

      <p>
        Based in the Central Valley, I'm a front-end developer passionate about
        building accessible web apps that users love.
      </p>

      <button>Contact me</button>

      <h2>HTML</h2>
      <p>4 Years Experience</p>

      <h2>CSS</h2>
      <p>4 Years Experience</p>

      <h2>JavaScript</h2>
      <p>4 Years Experience</p>

      <h2>Accessibility</h2>
      <p>4 Years Experience</p>

      <h2>React</h2>
      <p>3 Years Experience</p>

      <h2>Sass</h2>
      <p>3 Years Experience</p>

      <h2>Projects</h2>

      <button>Contact me</button>

      <h3>Design portfolio</h3>
      <p>HTML CSS</p>
      <button>View project</button>
      <button>View code</button>

      {/* Add the rest of your projects here */}

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

      <p>Adrian Mayfield</p>
    </div>
  );
}

export default HomePage;

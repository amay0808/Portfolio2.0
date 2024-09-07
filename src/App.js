import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ChatBot from "react-chatbotify";
import "./style.css"; // Updated path to the copied CSS file

function App() {
  const [currentStep, setCurrentStep] = useState("start");
  const flow = {
    start: {
      message: "Want to know more about my listed projects? Feel free to ask!",
      path: (params) => {
        const userInput = params.userInput.toLowerCase().trim();

        if (userInput.includes("around the u.s")) {
          return "aroundTheUS";
        } else if (userInput.includes("project synthesis")) {
          return "projectSynthesis";
        } else if (userInput.includes("practicum coffee shop")) {
          return "PracticumCoffeeShop";
        } else if (
          userInput.includes("what to wear") ||
          userInput.includes("wtwr")
        ) {
          return "Wtwr";
        } else if (
          userInput.includes("thanks") ||
          userInput.includes("thank you")
        ) {
          return "youreWelcome";
        } else {
          return "notFound";
        }
      },
    },
    aroundTheUS: {
      message:
        "Around The U.S. is a web application that allows users to create a virtual scrapbook of their travels throughout the United States. Users can add and remove photos, like photos of other users, and make minor adjustments to their own profiles. The project features a fully responsive design for optimal viewing on any device and is built using HTML, CSS, and JavaScript.",
      path: "end",
    },
    projectSynthesis: {
      message:
        "Built using React, TypeScript, Tailwind CSS, and GraphQL. Project Synthesis is an educational initiative that started as a video podcast about organic synthesis and grew into a broader collaborative effort to make science content accessible. My contributions included developing the web app's search query functionality, team member section, and posters section. This project was part of Triple Ten's Externship program.",
      path: "end",
    },
    PracticumCoffeeShop: {
      message:
        "This is the second project of the Software Engineer program at Triple Ten. It was created using HTML and CSS, based on the Figma design brief.",
      path: "end",
    },
    Wtwr: {
      message:
        "What to Wear (WTWR) is a web application that allows users to input their location and the weather forecast for the day. The app then provides outfit suggestions based on the weather conditions. The project was built using React, MongoDB, and the OpenWeatherMap API. This was the final project of the Software Engineer program at Triple Ten.",
      path: "end",
    },
    notFound: {
      message:
        "I'm here to talk about my projects! You can ask about 'Around The U.S.', 'Project Synthesis', 'Practicum Coffee Shop', or 'What to Wear (WTWR)'. Which one would you like to know more about?",
      path: "start",
    },
    youreWelcome: {
      message:
        "You're welcome! Feel free to reach out if you'd like to learn more about any of my projects. Have a great day!",
      path: "end",
    },
    end: {
      message:
        "Would you like to know about another project? You can ask me again!",
      options: [
        { label: "Yes", path: "start" },
        { label: "No, thanks", path: "end" },
      ],
      chatDisabled: false,
    },
  };
  // Update the current step when user selects an option
  function handleUserInput(params) {
    const nextStep = flow[currentStep].path(params);
    setCurrentStep(nextStep);
  }
  const currentFlow = flow[currentStep];
  const themes = [{ id: "terminal", version: "0.1.0" }];
  return (
    <div className="App">
      <HomePage />
      <div className="chatbot-container">
        <ChatBot
          flow={flow}
          currentFlow={currentFlow}
          handleUserInput={handleUserInput}
          themes={themes}
          styles={{
            headerStyle: { background: "green" },
            chatContainerStyle: { background: "green" },
            chatIconStyle: {
              backgroundColor: "green", // Set the background color
              borderRadius: "50%", // Make the icon round
              width: "50px", // Set the width
              height: "50px", // Set the height
            },
          }}
        />
        <div>
          <p>{currentFlow.message}</p>
          {currentFlow.options && (
            <div>
              {currentFlow.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleUserInput({ userInput: option.label })}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;

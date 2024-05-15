import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Error from "../components/Error.js";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqerbrg");
  const [isNameInvalid, setNameInvalid] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isFormSubmissionInvalid, setFormSubmissionInvalid] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    setUserName(name);
    const isInvalid = !name.match(/^[A-Za-z ]*$/);
    setNameInvalid(isInvalid);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (email === "") {
      setEmailInvalid(false);
    } else {
      const isInvalid = !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
      setEmailInvalid(isInvalid);
    }
  };

  const validateForm = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!email || !message || !email.includes("@")) {
      setFormSubmissionInvalid(true);
    } else {
      setFormSubmissionInvalid(false);
      handleSubmit(event); // Submit form via Formspree
    }
  };

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div className="form">
      <form onSubmit={validateForm} noValidate>
        <label className="form_label">
          <input
            className={`form_input name-input ${
              isNameInvalid ? "form_input_invalid" : ""
            } ${!isNameInvalid && userName !== "" ? "form_input_valid" : ""}`}
            type="text"
            name="name"
            placeholder="NAME"
            required
            pattern="[A-Za-z ]*"
            onChange={handleNameChange}
          />
          <Error show={isNameInvalid} message="Invalid character input" />
        </label>
        <label className="form_label">
          <input
            className={`form_input email-input ${
              isEmailInvalid ? "form_input_invalid" : ""
            } ${!isEmailInvalid && email !== "" ? "form_input_valid" : ""}`}
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={handleEmailChange}
          />
          <Error show={isEmailInvalid} message="Invalid email input" />
        </label>
        <label className="form_label">
          <textarea
            className="form_input message-box"
            name="message"
            placeholder="MESSAGE"
            required
          ></textarea>
        </label>
        <Error show={isFormSubmissionInvalid} message="Form submission error" />
        <input
          className="send-message-btn"
          type="submit"
          value="SEND MESSAGE"
          disabled={state.submitting}
        />
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default ContactForm;

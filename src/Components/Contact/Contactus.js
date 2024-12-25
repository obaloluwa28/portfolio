import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaHandshake } from "react-icons/fa";
import axios from "axios";

const Contactus = ({ toggleState }) => {
  const [toggle, setToggle] = useState(true);
  const [values, setValues] = useState({
    email: "",
    sender: "",
    message: "",
  });

  useEffect(() => {
    setToggle(toggleState);
  }, [toggleState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitform = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-backend-ihw99c238-obaloluwa28s-projects.vercel.app/contact",
        values
      );
      alert(response.data.message || "Form submitted successfully!");
      setValues({ email: "", sender: "", message: "" }); // Reset form
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="buttom-main-contain">
      <div className="sideproj_title_contain">
        <span className={toggle ? "sideproj_title" : "sideproj_title_"}>
          Get In Touch
        </span>
      </div>
      <div className="buttm-contain">
        <div className={toggle ? "shakeicon" : "shakeicon_"}>
          <FaHandshake id="shake-icon" />
          <span id="si-thnk">Thank You</span>
          <span id="si-thnk-2">Any Question or Queries?</span>
        </div>
        <form
          onSubmit={handleSubmitform}
          className={toggle ? "emailmsgs" : "emailmsgs_"}
        >
          <div className="top-container">
            <div className={toggle ? "top-left" : "top-left_"}>
              <span id={toggle ? "label" : "label_"}>Email</span>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={values.email}
                id={toggle ? "field" : "field_"}
              />
            </div>

            <div className={toggle ? "top-right" : "top-right_"}>
              <span id={toggle ? "label" : "label_"}>Name</span>
              <input
                type="text"
                onChange={handleChange}
                name="sender"
                value={values.sender}
                id={toggle ? "field" : "field_"}
              />
            </div>
          </div>

          <div className={toggle ? "mess-buttn" : "mess-buttn_"}>
            <span id={toggle ? "label" : "label_"}>Message</span>
            <textarea
              type="text"
              onChange={handleChange}
              name="message"
              value={values.message}
              id={toggle ? "field1" : "field1_"}
            />
          </div>

          <div className="submit_container">
            <input type="submit" id="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

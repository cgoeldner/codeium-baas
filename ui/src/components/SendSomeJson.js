import React, { useState } from "react";
import "./SendSomeJson.css";

function SendSomeJson() {
  const [formData, setFormData] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      console.log(formData);
      const response = await fetch("http://localhost:3000/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data stored successfully");
      } else {
        console.error("Error storing data");
      }
    } catch (error) {
      console.error("Error storing data", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="send-some-json">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SendSomeJson;

import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SendSomeJson;

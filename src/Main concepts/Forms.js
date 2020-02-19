import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function Forms() {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userGender, setUserGender] = useState("not selected");

  const inputChangeHandler = event => {
    setUserName(event.target.value.toUpperCase());
  };

  const descriptionChangeHandler = event => {
    setUserDescription(event.target.value);
  };

  const changeGenderHandler = event => {
    setUserGender(event.target.value);
  };

  const submitHandler = event => {
    alert(
      "This name was submited: " +
        userName +
        "\nDescription: " +
        userDescription +
        "\nGender: " +
        userGender
    );
    event.preventDefault();
  };

  return (
    <div style={{ maxWidth: "700px", width: "100%", margin: "0 auto" }}>
      <Form onSubmit={submitHandler}>
        <p>Your name: {userName}</p>
        <label>
          Name:
          <Form.Input value={userName} onChange={inputChangeHandler} />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={userDescription}
            onChange={descriptionChangeHandler}
            style={{ resize: "none" }}
          />
        </label>
        <br />
        <label>
          <p>Your gender is: {userGender}</p>
          <br />
          Pick your gender:
          <select value={userGender} onChange={changeGenderHandler}>
            <option value="man">Man</option>
            <option value="women">Women</option>
            <option value="not selected">Not selected</option>
          </select>
        </label>
        <br />
        <Form.Input type="submit" value="submit" />
      </Form>
    </div>
  );
}

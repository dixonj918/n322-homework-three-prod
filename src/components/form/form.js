import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FormtoDo() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createToDo = () => {
    const todoRef = firebase.database().ref("n322-homework-three");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div className="formContainer">
      <InputGroup className="mb-3">
        <Form.Control
          onChange={handleOnChange}
          placeholder="To-Do Item"
          aria-label="To-Do Item"
          aria-describedby="basic-addon2"
        />
        <Button onClick={createToDo} variant="primary" id="button-addon2">
          Add To Do
        </Button>
      </InputGroup>
    </div>
  );
}

export default FormtoDo;

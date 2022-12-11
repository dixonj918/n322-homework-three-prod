import React from "react";
import firebase from "../../utilities/firebase";
import Button from "react-bootstrap/Button";
import styles from "./toDo.css";

function ToDo({ todo }) {
  return (
    <div>
      <h1 className="fw-bold">{todo.title}</h1>
      <Button variant="danger">Delete</Button>
      <Button variant="success">complete</Button>
    </div>
  );
}

export default ToDo;

import React from "react";
import firebase from "../../utilities/firebase";
import Button from "react-bootstrap/Button";
import styles from "./toDo.css";

function ToDo({ todo }) {
  const completeToDo = () => {
    const todoref = firebase
      .database()
      .ref("n322-homework-three")
      .child(todo.id);

    todoref.update({
      complete: !todo.complete,
    });
  };

  const deleteToDo = () => {
    const todoref = firebase
      .database()
      .ref("n322-homework-three")
      .child(todo.id);

    todoref.remove();
  };
  return (
    <div>
      <h1 className={todo.complete ? "complete" : "incomplete"}>
        {todo.title}
      </h1>
      <Button variant="danger" onClick={deleteToDo}>
        Delete
      </Button>
      <Button variant="success" onClick={completeToDo}>
        complete
      </Button>
    </div>
  );
}

export default ToDo;

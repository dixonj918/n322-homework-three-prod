import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav/nav";
import bootstrapComp from "./components/bootstrap/bootstrapComp";
import FormtoDo from "./components/form/form";
import ToDoList from "./components/toDoList/toDoList";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <FormtoDo></FormtoDo>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;

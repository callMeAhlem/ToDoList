import "./App.css";
import { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TasksList from "./Components/TasksList";
import Icon from "./img/checkbox-multiple-svgrepo-com.svg";
import NotePad from "./img/checklist.gif";
import Filter from "./Components/Filter";
import { useSelector } from "react-redux";

function App() {
  const tasks=useSelector(Store=>Store.Tasks)
  const addNew = (x) => {
    // setTask([x, ...tasks]);
  };
  const [Search, setSearch] = useState("");
  const clearTasks = () => {
    tasks.splice(0, 1);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="mainTitle">
          <img id="checkIcon" src={Icon} alt="icon" />
          <h1>My Todo-s</h1>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <TaskInput  />
        
        </div>
        <Filter setSearch={setSearch} />
        <div style={{ display: "flex", gap: "200px" }}>
          <div>
            {tasks
              .filter((el) => el.description.includes(Search))
              .map((el) => (
                <TasksList item={el} />
              ))}
          </div>
          <img src={NotePad} alt="note Pad" style={{ width: "300px" }} />
        </div>
      </div>
    </div>
  );
}

export default App;

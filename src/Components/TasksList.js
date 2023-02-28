import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletTask, editTask } from "../JS/TasksSlice/TasksSlice";
import "./TasksList.css";
const TasksList = ({ item }) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState({ done: false });
  const [showBtn, setshowBtn] = useState(false);
  const [upInput, setupInput] = useState(item);
  return (
    <div>
      <div className="taskItem">
        <input
          type="checkbox"
          onChange={(e) => setDone({ done: e.target.checked })}
        />
        <h4 style={{ color: done.done ? "#3b71ca" : "black" }}>
          {item.description}
        </h4>
        <button onClick={() => setshowBtn(true)}>Edit</button>
      </div>
        {showBtn ? (
          <div className="updateItem">
            <input type="text" defaultValue={item.description} onChange={e=>setupInput({...upInput,description:e.target.value})}></input>
            <button onClick={() =>dispatch(editTask(upInput))}>Update</button>
            <button onClick={() => setshowBtn(false)}>Cancel</button>
            <button onClick={() => {dispatch(deletTask(item));setshowBtn(false)}}>Delete</button>
      </div>

        ) : null}
    </div>
  );
};

export default TasksList;

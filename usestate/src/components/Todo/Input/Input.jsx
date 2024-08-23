import { useState } from "react";
import style from "./Input.module.scss";

export function Input({ addTask, exit }) {
  const [task, setTask] = useState("");

  function handleAddTask() {
    addTask(task);
    setTask("");
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div className={style.inputStyling}>
      <button onClick={exit}>X</button>
      <input
        type="text"
        placeholder="Write your task here"
        value={task}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
}

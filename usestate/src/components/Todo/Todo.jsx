import { useState } from "react";
import { Input } from "./Input/Input";
import { Task } from "./Task/Task";
import style from './Todo.module.scss'

export function Todo() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function addTask(taskText) {
    const newTask = {
      text: taskText,
    };
    setTasks(tasks.concat(newTask));
  }

  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  }

  function openInput() {
    setIsOpen(true);
  }

  function clearTasks() {
    setTasks([]);
  }

  function handleExit(){
    setIsOpen(false)
  }


  return (
    <div className={style.todoStyling}>
      <h2>To Do</h2>
      <button className={style.deleteAll} onClick={clearTasks}>
        <span>
          <img src="../src/assets/trashcan.svg" alt="" />
        </span>
        Delete all
      </button>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.text}>
              <Task task={task.text} onDelete={() => deleteTask(task.text)} />
            </li>
          ))}
        </ul>
        {isOpen && <Input exit={handleExit} addTask={addTask} />}
      </div>
      <button className={style.addTask} onClick={openInput}>
        <span>+</span>add new
      </button>
    </div>
  );
}

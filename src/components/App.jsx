import "./App.css";
import { useState } from "react";
import s from "./todo.module.css";

const App = () => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState("");
  const addChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAddClick = () => {
    if (todo.trim() === "") {
      return alert("add some tasks!!!");
    }
    setTask((prev) => [...prev, { key: crypto.randomUUID(), taskText: todo }]);
    setTodo("");
  };

  const deleteBTN = (e) => {
    setTask(task.filter((item) => item.key !== e.target.id));
  };

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        placeholder="Add your taks here!"
        className={s.input}
        onChange={addChange}
        value={todo}
      />
      <button className={s.btn} onClick={handleAddClick}>
        Add task!!!
      </button>
      <ul className={s.list}>
        {task.map((item) => {
          return (
            <li key={item.key}>
              {item.taskText}{" "}
              <button onClick={deleteBTN} id={item.key}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

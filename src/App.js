import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const deleteTask = function () {
    setTasks([]);
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = function (index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Dia list</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>추가</button>
      <ul>
      {tasks.map((t, index) => (
        <li key={index}>
          {index + 1}.{t} <button onClick={() => removeTask(index)}>삭제</button>
        </li>
      ))}
      </ul>

      <button onClick={deleteTask}>할 일 전체 삭제</button>
    </div>
  );
}

export default App;

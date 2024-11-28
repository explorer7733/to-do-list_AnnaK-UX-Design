import { useState, useEffect } from "react";

import AddTask from "./components/AddTask";
import List from "./components/List";
import ClearData from "./components/ClearData";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const addCompleteTask = (id) => {
    const completedTask = tasks.find((task) => task.id === id);
    const newCompletedTasks = [...completedTasks, completedTask];
    setCompletedTasks(newCompletedTasks);
    removeTask(id);
    localStorage.setItem("completedTasks", JSON.stringify(newCompletedTasks));
  }

  const clearData = () => {
    localStorage.clear();
    setTasks([]);
    setCompletedTasks([]);
  }

  return (
    <main>
      <AddTask onAdd={addTask} />
      <div className={`list-container ${tasks.length > 0 ? "show" : ""}`}>
        <div>
          <List list={tasks} heading="To Do List" onComplete={addCompleteTask} onRemove={removeTask} />
        </div>
      </div>
      
      <div className={`list-container ${completedTasks.length > 0 ? "show" : ""}`}>
        <div>
        <List list={completedTasks} heading="Completed Tasks" />
        </div>
      </div>
      {(tasks.length > 0 || completedTasks.length > 0) && <ClearData onClear={clearData} />}
    </main>
  )
}

export default App

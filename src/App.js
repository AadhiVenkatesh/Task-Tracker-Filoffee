import React, { useContext, useState } from "react";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1 className="text-center">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

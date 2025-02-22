import { useState } from "react";
import TaskColumn from "./TaskColumn";
// import TaskColumn from "./TaskColumn";

const categories = ["To-Do", "In Progress", "Done"];

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now(), timestamp: new Date().toLocaleString() },
    ]);
  };

  // Edit Task
  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Remove Task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="flex justify-center gap-4 p-5">
      {categories.map((category) => (
        <TaskColumn
          key={category}
          category={category}
          tasks={tasks.filter((task) => task.category === category)}
          addTask={addTask}
          editTask={editTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
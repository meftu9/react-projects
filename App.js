import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddOrUpdateTask from './AddOrUpdateTask';
import FilterButtons from './FilterButtons';
import TaskList from './TaskList';

function App() {
  // Load tasks from local storage directly in useState
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = () => {
    if (!newTask.trim()) return;

    const taskObj = {
      id: editingTask?.id || Date.now(),
      text: newTask,
      completed: editingTask?.completed || false,
    };

    setTasks((prevTasks) =>
      editingTask ? prevTasks.map((task) => (task.id === editingTask.id ? taskObj : task)) : [taskObj, ...prevTasks]
    );

    setNewTask('');
    setEditingTask(null);
  };

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

  const editTask = (task) => {
    setEditingTask(task);
    setNewTask(task.text);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddOrUpdateTask newTask={newTask} setNewTask={setNewTask} addOrUpdateTask={addOrUpdateTask} editingTask={editingTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={toggleCompletion} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;

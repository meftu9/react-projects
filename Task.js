import React from 'react';
import TaskActions from './TaskActions';


const Task = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="check-box"
      />
      <span>{task.text}</span>
      <TaskActions task={task} onDelete={onDelete} onEdit={onEdit} />
    </li>
  );
};

export default Task;

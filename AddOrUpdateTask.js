import React from 'react';

const AddOrUpdateTask = ({ newTask, setNewTask, addOrUpdateTask, editingTask }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder={editingTask ? 'Edit your task' : 'Add a new task'}
      />
      <button onClick={addOrUpdateTask}>
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default AddOrUpdateTask;

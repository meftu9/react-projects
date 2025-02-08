import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const TaskActions = ({ task, onDelete, onEdit }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faEdit}
        className="edit-icon"
        onClick={() => onEdit(task)}
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        className="delete-icon"
        onClick={() => onDelete(task.id)}
      />
    </>
  );
};

export default TaskActions;

// TaskCard.jsx
import React from 'react';
import Button from './Button';

const TaskCard = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white dark:bg-gray-800 shadow rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      {/* Left side: Checkbox + Task text */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className={`text-gray-900 dark:text-gray-100 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
          {task.text}
        </span>
      </div>

      {/* Right side: Delete button */}
      <Button
        variant="danger"
        size="sm"
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
      >
        Delete
      </Button>
    </div>
  );
};

export default TaskCard;

import React, { useState } from "react";
import "../css/popup.css";
import { FaTimes } from "react-icons/fa";
import axios from "axios"; // Import Axios


const Popup = ({ onClose }) => {
  const [subtasks, setSubtasks] = useState([""]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  

  const handleCreateTask = async () => {
    if (title.trim() === "" || description.trim() === "" || subtasks.some((subtask) => subtask.trim() === "")) {
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:1338/api/user/addtask', {
        title,
        description,
        subtasks,
        status,
      });
  
      console.log('Task created:', response.data);
  
      // Close the popup
      onClose();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  const handleAddSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const handleRemoveSubtask = (index) => {
    const newSubtasks = [...subtasks];
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  const handleSubtaskChange = (index, value) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = value;
    setSubtasks(newSubtasks);
  };

  return (
    <div className="add-task-popup">
      <div className="div__btn">
        <button className="close-button input__filed" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <h3>Add New Task</h3>
      <label>Title</label>
      <input
        type="text"
        placeholder="take a coffee break"
        className="input__filed input__filed_color"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        cols={3}
        rows={3}
        placeholder="e.g its good to take a break..."
        className="input__filed input__filed_color"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Subtasks</label>
      {subtasks.map((subtask, index) => (
        <div key={index} className="subtask-input">
          <input
            type="text"
            placeholder="e.g drink coffee and smile"
            value={subtask}
            onChange={(e) => handleSubtaskChange(index, e.target.value)}
            className="input__filed_color"
          />
          <button
            className="remove-subtask-button"
            onClick={() => handleRemoveSubtask(index)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
      <button
        className="add-subtask-button input__filed"
        onClick={handleAddSubtask}
        disabled={subtasks[subtasks.length - 1] === ""}
      >
        + Add New Subtask
      </button>
      <label>Status</label>
      <select
        className="input__filed input__filed_color select_options"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button className="create_task-button" onClick={handleCreateTask}>
        Create Task
      </button>
    </div>
  );
};

export default Popup;
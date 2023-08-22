import React, { useState } from "react";
import "../css/popedit.css";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import axios from "axios";

function PopupEdit({ task, onClose }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    subtasks: task.subtasks,
    status: task.status,
  });

  const [checkedSubtasks, setCheckedSubtasks] = useState(
    new Array(editedTask.subtasks.length).fill(false)
  );

  const [editModeSubtaskIndexes, setEditModeSubtaskIndexes] = useState([]);

  const handleSubtaskCheckboxChange = (index) => {
    const updatedCheckedSubtasks = [...checkedSubtasks];
    updatedCheckedSubtasks[index] = !updatedCheckedSubtasks[index];
    setCheckedSubtasks(updatedCheckedSubtasks);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setEditModeSubtaskIndexes([]); 
  };

  const handleEdit = () => {
    setShowDropdown(!showDropdown);
    setEditModeSubtaskIndexes(
      editedTask.subtasks
        .map((_, index) => (!checkedSubtasks[index] ? index : -1))
        .filter((index) => index !== -1)
    ); 
  };

  const handleSubtaskEdit = (index, newValue) => {
    const updatedSubtasks = [...editedTask.subtasks];
    updatedSubtasks[index] = newValue;
    setEditedTask({ ...editedTask, subtasks: updatedSubtasks });
  };

  const handleStatusChange = (e) => {
    setEditedTask({ ...editedTask, status: e.target.value });
  };

  const handleSaveChanges = async () => {
    try {
      
      const updatedTaskData = {
        title: editedTask.title,
        subtasks: [],
        status: editedTask.status,
      };

     
      updatedTaskData.subtasks = editedTask.subtasks.filter(
        (_, index) => !checkedSubtasks[index]
      );

      
      await axios.put(
        `http://localhost:1338/api/user/updatetask/${task._id}`,
        updatedTaskData
      );
      console.log("the update send ");
      // Close the popup
      onClose();
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  return (
    <div className="popup-edit">
      <div className="header__popup">
        <button className="close-button input__filed" onClick={onClose}>
          <FaTimes />
        </button>
        <FaEllipsisV className="ellipsis-icon" onClick={toggleDropdown} />
      </div>

      <div className="edit__btn">
        {showDropdown && (
          <div className="dropdown-list">
            <button className="dropdown-option" onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>

      <h1 className="inputfiled">{task.title}</h1>
      <p className="hint">
        We know what we're planning to build for version one, now we need to
        finalize the first pricing model we will use. Keep iterating the
        subtasks until we have a coherent proposition.
      </p>
      <h6 className="inputfiled">
        Subtasks ({editedTask.subtasks.length} of {editedTask.subtasks.length})
      </h6>
      <ul>
        {editedTask.subtasks.map((subtask, index) => (
          <li key={index} className="sub_task_item">
            <label className="subtask-label">
              <input
                type="checkbox"
                checked={checkedSubtasks[index]}
                onChange={() => handleSubtaskCheckboxChange(index)}
                className="input__field_color input__field_custom"
              />
              <span
                className={`subtask-text ${
                  checkedSubtasks[index] ? "completed" : ""
                } ${editModeSubtaskIndexes.includes(index) ? "edit-mode" : ""}`}
                onClick={() => {
                  if (
                    !checkedSubtasks[index] &&
                    !editModeSubtaskIndexes.includes(index)
                  ) {
                    setEditModeSubtaskIndexes([
                      ...editModeSubtaskIndexes,
                      index,
                    ]);
                  }
                }}
              >
                {editModeSubtaskIndexes.includes(index) ? (
                  <input
                    type="text"
                    value={subtask}
                    onChange={(e) => handleSubtaskEdit(index, e.target.value)}
                    onBlur={() => {
                      const newEditModeIndexes = editModeSubtaskIndexes.filter(
                        (i) => i !== index
                      );
                      setEditModeSubtaskIndexes(newEditModeIndexes);
                    }}
                  />
                ) : (
                  subtask
                )}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <label>Status</label>
      <select
        className="select_options inputfiled"
        value={editedTask.status}
        onChange={handleStatusChange}
      >
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button
        className="save-button input__field inputfiled"
        onClick={handleSaveChanges}
      >
         Save Changes
      </button>
    </div>
  );
}

export default PopupEdit;

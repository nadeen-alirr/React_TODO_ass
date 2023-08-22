import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import '../css/header.css';
import Popup from './Popup';

const Header = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAdd_Task = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <header className="header">
      <div className="header-left">Platform Launch</div>
      <div className="header-right">
        <button className="add-task-button" onClick={handleAdd_Task}>+ Add New Task</button>
        <FaEllipsisV className="ellipsis-icon" />
      </div>
      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </header>
  );
};

export default Header;
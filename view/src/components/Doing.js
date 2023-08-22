// import React from 'react'
// import '../css/doing.css'

// const Doing = ({tasks}) => {
//   //featching doing

//   return (
//    <div>
//      <div className='title_todo'>
//     <div className='point_doing'>
//     </div>
//     <div className='total_todo'>
//       DOING (4)
//     </div>
//     </div>
//     <div className='todo'>
//      <div className='card_to_do'>
//      <div>
//      build ui for onboarding flow
//      </div>
//      <div className='progress1'>
//       0 of 3 subtasks
//      </div>
//     </div>
//     <div className='card_to_do'>
//      <div>
//      build ui for onboarding flow
//      </div>
//      <div className='progress1'>
//       0 of 3 subtasks
//      </div>
//     </div>
//     <div className='card_to_do'>
//      <div>
//      build ui for onboarding flow
//      </div>
//      <div className='progress1'>
//       0 of 3 subtasks
//      </div>
//     </div>
//    </div>
//    </div>
//   )
// }

// export default Doing
import React, { useState } from 'react';
import '../css/doing.css';
import PopupEdit from './PopupEdit';

const Doing = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null); // To track the selected task

  const handleEditClick = (task) => {
    setSelectedTask(task);
  };

  const handleClosePopup = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      <div className='title_todo'>
        <div className='point_doing'></div>
        <div className='total_todo'>DOING ({tasks.length})</div>
      </div>
      <div className='todo'>
        {tasks.map((task, index) => (
          <div key={index} className='card_to_do' onClick={() => handleEditClick(task)}>
            <div>{task.title}</div>
            <div className='progress1'>{task.subtasks.length} of {task.subtasks.length} subtasks</div>
          </div>
        ))}
      </div>
      {selectedTask && <PopupEdit task={selectedTask} onClose={handleClosePopup} />}
    </div>
  );
};

export default Doing;
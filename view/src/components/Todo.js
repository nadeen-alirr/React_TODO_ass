// import React from 'react'
// import '../css/todo.css'
// const Todo = ({tasks}) => {
//   //featching to do
//   return (
//    <div>
//      <div className='title_todo'>
//     <div className='point'>
//     </div>
//     <div className='total_todo'>
//       TODO (4)
//     </div>
//     </div>
//    <div className='todo'>
//    <div className='card_to_do'>
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
// };

// export default Todo;

import React, { useState } from 'react';
import '../css/todo.css';
import PopupEdit from './PopupEdit';

const Todo = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const openPopup = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <div className='title_todo'>
        <div className='point'></div>
        <div className='total_todo'>TODO ({tasks.length})</div>
      </div>
      <div className='todo'>
        {tasks.map((task) => (
          <div
            key={task._id}
            className='card_to_do'
            onClick={() => openPopup(task)} // Set the click event handler
          >
            <div>{task.title}</div>
            <div className='progress1'>{task.subtasks.length} of {task.subtasks.length} subtasks</div>
          </div>
        ))}
      </div>
      {selectedTask && <PopupEdit task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
};

export default Todo;
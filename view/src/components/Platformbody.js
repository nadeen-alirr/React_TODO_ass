import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';
import Createcomponent from './Createcomponent';
import axios from 'axios'; // Import axios for API calls
import '../css/platformpage.css';

const Platformbody = () => {
  const [tasks, setTasks] = useState([]);
  
  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:1338/api/user/gettask');
      setTasks(response.data);
     
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  
  useEffect(() => {
    fetchTasks();
    console.log(tasks); // This should log the updated tasks
  }, []);

  return (
    <div className='body'>
      <div className='component-container'>
        {/* Pass tasks as props to each component */}
        <Todo tasks={tasks.filter(task => task.status === 'todo')}  />
        <Doing tasks={tasks.filter(task => task.status === 'doing')} />
        <Done tasks={tasks.filter(task => task.status === 'done')} />
        <Createcomponent fetchTasks={fetchTasks} />
      </div>
    </div>
  );
};

export default Platformbody;
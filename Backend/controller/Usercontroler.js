const Task = require('../models/Taskmodels');


const createTask = async (req, res) => {
  try {
    const { title, description, subtasks, status } = req.body;

    const newUser = new Task({
      title,
      description,
      subtasks,
      status,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};
const getTask = async (req, res) => {
    try {
        const tasks = await Task.find(); 
        res.json(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Error fetching tasks' }); 
 };
 const update_task = async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const { title, subtasks, status } = req.body; 
  
      
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { title, subtasks, status },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
module.exports = {createTask, getTask , update_task};
}
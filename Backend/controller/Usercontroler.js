const Task = require('../models/Taskmodels');


// Controller for creating a new user
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
        const tasks = await Task.find(); // Retrieve all tasks from the database
        res.json(tasks); // Respond with the tasks in JSON format
      } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Error fetching tasks' }); // Respond with an error status
      }
 };
 const update_task = async (req, res) => {
    try {
      const taskId = req.params.taskId; // Extract the task ID from the URL parameter
      const { title, subtasks, status } = req.body; // Get updated data from the request body
  
      // Find the task by ID and update its data
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { title, subtasks, status },
        { new: true } // Returns the updated task
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      // Respond with the updated task
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
module.exports = {createTask, getTask , update_task};
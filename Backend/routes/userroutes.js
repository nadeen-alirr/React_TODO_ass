const express = require('express');
const router = express.Router();
const userController = require('../controller/Usercontroler');

router.post('/user/addtask',userController.createTask);
router.get('/user/gettask',userController.getTask);
router.put('/user/updatetask/:taskId' ,userController.update_task);


module.exports = router;


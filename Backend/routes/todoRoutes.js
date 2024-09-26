const express= require('express');
const router=express.Router();

router.post('/task',createTask)
router.get('/getTask',getTasks)
router.post('/removeTask',deleteTask)
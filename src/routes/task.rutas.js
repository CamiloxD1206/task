const express = require('express');
const router = express.Router();
const task = require('../models/task.js');


router.get('/', async(req, res) => {
    const tasks = await task.find()
    res.json(tasks)

})
router.get('/:id', async(req, res) => {
    const tarea = await task.findById(req.params.id)
    res.json(tarea);
})
router.post('/', async(req, res) => {
    const { title, description } = req.body;
    const Task = new task({ title, description });
    await Task.save();
    console.log(Task)
    res.json({
        status: "tarea guardada"
    })
})

router.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status: "tarea actualizada"
    })

})
router.delete('/:id', async(req, res) => {

    await task.findByIdAndRemove(req.params.id);
    res.json({
        status: "tarea eliminada"
    })

})


module.exports = router;
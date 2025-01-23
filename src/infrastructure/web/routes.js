const express = require('express')
const router = express.Router()

module.exports = taskController => {
  router.post('/tasks', taskController.create.bind(taskController))
  router.get('/tasks', taskController.getAll.bind(taskController))
  router.get('/tasks/:id', taskController.getById.bind(taskController))
  router.put('/tasks/:id', taskController.update.bind(taskController))
  router.delete('/tasks/:id', taskController.delete.bind(taskController))
  return router
}

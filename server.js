require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./src/infrastructure/config/database')
const TaskRepositorySQLite = require('./src/infrastructure/database/TaskRepositorySQLite')
const CreateTask = require('./src/domain/usecases/CreateTask')
const GetTaskById = require('./src/domain/usecases/GetTaskById')
const UpdateTask = require('./src/domain/usecases/UpdateTask')
const DeleteTask = require('./src/domain/usecases/DeleteTask')
const TaskController = require('./src/application/controllers/TaskController')
const createRoutes = require('./src/infrastructure/web/routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

const taskRepository = new TaskRepositorySQLite(db)
const createTaskUseCase = new CreateTask(taskRepository)
const getTaskByIdUseCase = new GetTaskById(taskRepository)
const updateTaskUseCase = new UpdateTask(taskRepository)
const deleteTaskUseCase = new DeleteTask(taskRepository)
const taskController = new TaskController(
  createTaskUseCase,
  taskRepository,
  getTaskByIdUseCase,
  updateTaskUseCase,
  deleteTaskUseCase
)

app.use('/api', createRoutes(taskController))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

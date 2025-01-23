class TaskController {
  constructor (
    createTaskUseCase,
    taskRepository,
    getTaskByIdUseCase,
    updateTaskUseCase,
    deleteTaskUseCase
  ) {
    this.createTaskUseCase = createTaskUseCase
    this.taskRepository = taskRepository
    this.getTaskByIdUseCase = getTaskByIdUseCase
    this.updateTaskUseCase = updateTaskUseCase
    this.deleteTaskUseCase = deleteTaskUseCase
  }

  async create (req, res) {
    try {
      const task = await this.createTaskUseCase.execute(req.body)
      res.status(201).json(task)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async getAll (req, res) {
    try {
      const tasks = await this.taskRepository.findAll()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async getById (req, res) {
    try {
      const task = await this.getTaskByIdUseCase.execute(req.params.id)
      res.status(200).json(task)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async update (req, res) {
    try {
      const updatedTask = await this.updateTaskUseCase.execute(
        req.params.id,
        req.body
      )
      res.status(200).json(updatedTask)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete (req, res) {
    try {
      await this.deleteTaskUseCase.execute(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = TaskController

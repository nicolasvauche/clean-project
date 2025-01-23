class GetTaskById {
  constructor (taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (taskId) {
    if (!taskId) {
      throw new Error('Task ID is required')
    }

    const task = await this.taskRepository.findById(taskId)
    if (!task) {
      throw new Error('Task not found')
    }

    return task
  }
}

module.exports = GetTaskById

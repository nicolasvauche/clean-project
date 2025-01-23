class UpdateTask {
  constructor (taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (taskId, taskData) {
    if (!taskId) {
      throw new Error('Task ID is required')
    }

    const updatedTask = await this.taskRepository.update(taskId, taskData)
    if (!updatedTask) {
      throw new Error('Task not found or could not be updated')
    }

    return updatedTask
  }
}

module.exports = UpdateTask

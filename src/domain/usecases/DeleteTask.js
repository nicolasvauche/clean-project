class DeleteTask {
  constructor (taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (taskId) {
    if (!taskId) {
      throw new Error('Task ID is required')
    }

    const success = await this.taskRepository.delete(taskId)
    if (!success) {
      throw new Error('Task not found or could not be deleted')
    }

    return success
  }
}

module.exports = DeleteTask

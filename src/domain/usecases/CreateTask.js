class CreateTask {
  constructor (taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (taskData) {
    if (!taskData.title || !taskData.description) {
      throw new Error('Title and description are required')
    }

    const task = {
      title: taskData.title,
      description: taskData.description,
      isCompleted: false
    }

    return await this.taskRepository.create(task)
  }
}

module.exports = CreateTask

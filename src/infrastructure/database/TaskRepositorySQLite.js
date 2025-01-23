const sqlite3 = require('sqlite3').verbose()
const TaskRepository = require('../../domain/interfaces/TaskRepository')

class TaskRepositorySQLite extends TaskRepository {
  constructor (database) {
    super()
    this.db = database
  }

  async create (task) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO tasks (title, description, is_completed) VALUES (?, ?, ?)`
      this.db.run(
        query,
        [task.title, task.description, task.isCompleted ? 1 : 0],
        function (err) {
          if (err) return reject(err)
          resolve({ id: this.lastID, ...task })
        }
      )
    })
  }

  async findAll () {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM tasks`
      this.db.all(query, [], (err, rows) => {
        if (err) return reject(err)
        resolve(rows)
      })
    })
  }

  async findById (taskId) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM tasks WHERE id = ?`
      this.db.get(query, [taskId], (err, row) => {
        if (err) return reject(err)
        resolve(row || null)
      })
    })
  }

  async update (taskId, taskData) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE tasks
        SET title = ?, description = ?, is_completed = ?
        WHERE id = ?
      `
      this.db.run(
        query,
        [
          taskData.title,
          taskData.description,
          taskData.isCompleted ? 1 : 0,
          taskId
        ],
        function (err) {
          if (err) return reject(err)
          resolve(this.changes > 0)
        }
      )
    })
  }

  async delete (taskId) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM tasks WHERE id = ?`
      this.db.run(query, [taskId], function (err) {
        if (err) return reject(err)
        resolve(this.changes > 0)
      })
    })
  }
}

module.exports = TaskRepositorySQLite

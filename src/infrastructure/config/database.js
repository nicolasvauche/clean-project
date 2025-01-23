const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const databasePath = path.resolve(__dirname, '../../../tasks.db')
const db = new sqlite3.Database(databasePath, err => {
  if (err) {
    console.error('Error opening database:', err)
  } else {
    console.log('Connected to SQLite database')
  }
})

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      is_completed INTEGER DEFAULT 0
    )
  `)
})

module.exports = db

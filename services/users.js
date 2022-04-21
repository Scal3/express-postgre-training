const db = require('../db/db')

class UserService {
  async createUser(name , surname) {
    const user = await db.query('INSERT INTO users (name, surname) values ($1, $2) RETURNING *', [name , surname])
    return user
  }

  async getUsers() {
    const users = await db.query('SELECT * FROM users')
    return users
  }

  async getOneUser(id) {
    const user = await db.query('SELECT * FROM users where id = $1', [id])
    return user
  }

  async deleteUser(id) {
    const user = await db.query('DELETE FROM users where id = $1', [id])
    return user
  }

  async updateUser({ name, surname, id }) {
    const user = await db.query('UPDATE users set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
    return user
  }
}

module.exports = new UserService()
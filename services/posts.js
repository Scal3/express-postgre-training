const db = require('../db/db')

class PostsService {
  async createPost(title, content, userId) {
    const post = await db.query('INSERT INTO posts (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
    return post
  }

  async getPostsByUser(id) {
    const posts = await db.query('SELECT * FROM posts where user_id = $1', [id])
    return posts
  }
}

module.exports = new PostsService()
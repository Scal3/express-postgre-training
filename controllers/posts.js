const PostService = require('../services/posts')


const getPostsByUser = async (req, res) => {
  try {
    const id = req.query.id
    const posts = await PostService.getPostsByUser(id)

    res.status(201).json(posts.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body
    const post = await PostService.createPost(title, content, userId)

    res.status(201).json(post.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getPostsByUser,
  createPost
}
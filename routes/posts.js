const router = require('express').Router()
const { 
  getPostsByUser,
  createPost
} = require('../controllers/posts')

router.get('/', getPostsByUser)
router.post('/', createPost)


module.exports = router
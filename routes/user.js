const router = require('express').Router()
const { 
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser 
} = require('../controllers/users')

router.get('/', getUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
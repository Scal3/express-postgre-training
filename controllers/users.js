const UserService = require('../services/users')


const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers()

    res.status(201).json(users.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await UserService.getOneUser(id)

    res.status(201).json(user.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const createUser = async (req, res) => {
  try {
    const { name, surname } = req.body
    const user = await UserService.createUser(name, surname)

    res.status(201).json(user.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.body)

    res.status(201).json(user.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await UserService.deleteUser(id)

    res.status(201).json(user.rows)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}


module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}
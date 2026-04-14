// hanya digunakan untuk kebutuhan frontend

const { authUsername, authPassword } = require('../../config')

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!authUsername && !authPassword) {
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }

  if (username !== authUsername || password !== authPassword) {
    return res.status(401).json({ success: false, message: 'Username or password is incorrect' })
  }

  res.json({ success: true, message: 'Authorized' })
}

module.exports = { login }

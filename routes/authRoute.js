const keys = require('../config/keys')
module.exports = app => {
  app.post('/api/auth', (req, res) => {
    req.body.login === keys.login && req.body.password === keys.password
      ? res.send(true)
      : res.send(false)
  })
}

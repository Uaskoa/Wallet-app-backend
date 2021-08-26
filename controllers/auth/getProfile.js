require('dotenv').config()

const getProfile = (req, res, next) => {
  const userProfile = {
    email: req.user.email,
    name:req.user.name
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result: userProfile }
  })
}

module.exports = getProfile

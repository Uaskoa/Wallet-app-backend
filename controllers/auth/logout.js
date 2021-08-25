// const { User: service } = require('../../services')
const service = require('../../services/user')

const logout = async (req, res, next) => {
  try {
    const result = await service.updateById(req.user._id, { token: null })
    
    if (!result) {
       return res.status(401).json({
                Status: '401 Unauthorized',
                'Content-Type': 'application/json',
                'ResponseBody': {
                    "message": "Not authorized"
                }
            });
    }
    return res.status(204).json({
      status: 'success',
      code: 200,
      message: 'Logout success',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logout

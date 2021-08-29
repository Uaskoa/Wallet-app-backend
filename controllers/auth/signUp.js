const validateUser = require('../../middlewares/utils')
const service = require('../../services/user')
const jwt = require('jsonwebtoken')

const signUp = async (req, res, next) => {
  const { email, password,name } = req.body
  try {
    const {error} = validateUser.validate({ email, password,name })
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Ошибка от Joi или другой библиотеки валидации',
      })
    }
     
    const result = await service.getOne({ email })
    if (result) {
      res.status(409).json({
        status: 'error',
        code: 409,
        message: 'already signUp'
      })
      return
    }
   
   
    const user = await service.add({ email, password, name })
    

    const { SECRET_KEY } = process.env
    const payload = {
      id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY)
    await service.updateById(user._id, { token })
    console.log();
    const userInfo = {
      name:user.name,
      email: user.email,
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { user: userInfo },
      token: token,
      message: 'success'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signUp

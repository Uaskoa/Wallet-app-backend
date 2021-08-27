const validator= require('./utils')

const validate = ( ) => {
  return (req, res, next) => {
    const error = validator.validate(req.body )
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Ошибка от Joi или другой библиотеки валидации',
      })
      return
    }
    next()
  }
}
module.exports = validate

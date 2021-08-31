const jwt = require('jsonwebtoken');
require('dotenv');
const service = require('../../services/user');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await service.getOne({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'incorrect email or password',
      });
    }
    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    await service.updateById(user._id, { token });
    res.json({
      status: 'success',
      code: 200,
      data: {
        token: token,
        user: {
          name: user.name,
          email: user.email,
          balance:user.balance
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;

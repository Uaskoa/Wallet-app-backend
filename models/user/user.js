const  { Schema , model } = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// const { Schema } = mongoose

const userSchema = Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      // validate: { validator: validator.isEmail, message: '{VALUE} is not a valid email' },
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    token: {
    type: String,
    default: null,
    },
    // transactionUser: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Transaction',
    //   required: true,
    // },
  },
  // {
  //   timestamps: true,
  //   toObject: {
  //     versionKey: false,
  //     virtuals: true,
  //     transform: (_, ret) => {
  //       delete ret.id

  //       delete ret.password

  //       delete ret.wallet
  //       return ret
  //     },
  //   },
  //   toJSON: {
  //     virtuals: true,
  //     versionKey: false,
  //     transform: (_, ret) => {
  //       delete ret.id

  //       delete ret.password

  //       delete ret.wallet
  //       return ret
  //     },
  //   },
  // },
)

userSchema.virtual('wallet', {
  ref: 'Wallet',
  localField: '_id',
  foreignField: 'createdBy',
  justOne: true,
})

userSchema.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function (password) {
      return bcrypt.compareSync(password, this.password);
}

// userSchema.methods.comparePasswords = async function comparePasswords(password) {
//   try {
//     return await bcrypt.compare(password, this.password)
//   } catch (error) {
//     return null
//   }
// }

// userSchema.pre('save', function preUserSave(done) {
//   if (!this.isModified('password')) {
//     return done()
//   }
//   return bcrypt
//     .hash(this.password, 10)
//     .then(hash => {
//       this.password = hash
//       done()
//     })
//     .catch(err => done(err))
// })

const User = model('User', userSchema)

module.exports = User

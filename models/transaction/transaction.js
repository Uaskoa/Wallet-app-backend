const mongoose = require('mongoose')

const { Schema } = mongoose

const TYPES = {
  INCOME: true,
  COST: false,
}

const CATEGORIES = {
  MAIN_EXPENSES: 'Main expanses',
  FOOD: 'food',
  CAR: 'car',
  ENTERTAINMENT: 'entertainment',
  SELF_CARE: 'self care',
  CHILD_CARE: 'child Care',
  HOMEWARE: 'homeware',
  EDUCATION: 'education',
  RECREATION: 'recreation',
  OTHER_EXPENSES: 'other expanses'
}
// const transactionSchema = new Schema(
//   {
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     type: {
//       type: String,
//       default: 'income',
//       required: true,
//     },
//     transactionDate: {
//       type: Date,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       default: 0,
//       required: true,
//     },
//     category: {
//       type: String,
//       default: 'income',
//       required: true,
//     },
//     comment: String,
//     balanceAfter: {
//       type: Number,
//       required: true,
//     },
//     balanceAfterSign: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

const transactionSchema = new Schema({
  userId: {
    type: String,
    // required: true,
  },
  createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      // required: true,
    },
  type: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  month: {
    type: Number,
    required:true
  },
   year: {
    type: Number,
    required:true
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(CATEGORIES)
  },
  comments: {
    type: String,
    maxlength: 300,
  },
  amount: {
    type: Number,
    required: true,
  },
  balanceAfter: {
    type: Number,
    default:0
    // required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
},
)

// transactionSchema.virtual('user', {
//   ref: 'User',
//   localField: 'userId',
//   foreignField: '_id',
//   justOne: false,
// });


// transactionSchema.virtual('wallet', {
//   ref: 'Wallet',
//   localField: '_id',
//   foreignField: 'transactions',
//   justOne: true,
// })
// transactionSchema.virtual('wallet', {
//   ref: 'Wallet',
//   localField: 'id',
//   foreignField: 'transactions',
//   justOne: true,
// })

transactionSchema.statics.TYPES = TYPES
transactionSchema.statics.CATEGORIES = CATEGORIES

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction

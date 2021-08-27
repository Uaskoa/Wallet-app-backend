const mongoose = require('mongoose');

const { Schema } = mongoose;

const TYPES = {
  INCOME: 'false',
  COST: 'true',
};

const CATEGORIES = {
  MAIN: 'main',
  FOOD: 'food',
  CAR: 'car',
  DEVELOPMENT: 'development',
  KIDS: 'kids',
  HOME: 'home',
  EDUCATION: 'education',
  REST: 'rest',
  OTHER_EXPENSES: 'other expanses',
};

const transactionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(CATEGORIES),
    },
    comment: {
      type: String,
      maxlength: 300,
    },
    amount: {
      type: Number,
      required: true,
    },
    balanceAfter: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

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

transactionSchema.statics.TYPES = TYPES;

transactionSchema.statics.CATEGORIES = CATEGORIES;


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

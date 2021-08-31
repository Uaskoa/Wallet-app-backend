const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TYPES = {
  INCOME: 'false',
  COST: 'true',
};

const CATEGORIES = {
  MAIN: 'Основной',
  FOOD: 'Продукты',
  CAR: 'Машина',
  DEVELOPMENT: 'Забота о себе',
  KIDS: 'Забота о детях',
  HOME: 'Товары для дома',
  EDUCATION: 'Образование',
  REST: 'Досуг',
  OTHER_EXPENSES: 'Другие расходы',
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

transactionSchema.statics.TYPES = TYPES;
transactionSchema.statics.CATEGORIES = CATEGORIES;

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;

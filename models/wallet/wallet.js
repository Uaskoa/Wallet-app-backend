const mongoose = require('mongoose')

const { Schema, model } = mongoose

const walletSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    transactions: {
        type: Schema.Types.ObjectId,
        ref: 'transaction',
      },
    total: {
      type: Number,
      default: 0,
    },
    costs: {
      type: Number,
      default: 0,
    },
    income: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Wallet = model('wallet', walletSchema)

module.exports = Wallet

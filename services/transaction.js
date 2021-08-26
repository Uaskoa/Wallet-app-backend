const Transactions = require('../models/transaction/transaction')


const add = ({ type, date, category, comments, amount,year,month, userId }) => {
 
    const newTransaction = new Transactions({ type, date, category, comments, amount,year,month,userId })
    
    return newTransaction.save()
}


const getByFilter = ( id,month,year ) => {
  
  const result = Transactions.find({ userId: id, month: month,year:year })
  return result
}

const getAll = (id) => {
  const result = Transactions.find({ userId:id })
  return result
}

const getOne = (filter) => {

  return Transactions.findOne(filter)
}

module.exports = {add,getOne,getAll,getByFilter}
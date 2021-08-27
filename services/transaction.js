const Transactions = require('../models/transaction/transaction')


const add = ({ type, date, category, comment, amount,year,month,balanceAfter, userId,createdBy }) => {
 
    const newTransaction = new Transactions({ type, date, category, comment, amount,year,month,balanceAfter,userId,createdBy }).populate('createdBy')
    
    return newTransaction.save()
}


const getByFilter = ( id,month,year ) => {
  
  const result = Transactions.find({ userId: id, month: month,year:year }).populate('createdBy')
  return result
}

const getAll = (id) => {
 return Transactions.find({ userId:id }).populate('createdBy')
   
}

const getOne = (filter) => {

  return Transactions.findOne(filter)
}

module.exports = {add,getOne,getAll,getByFilter}
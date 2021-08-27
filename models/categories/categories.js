const mongoose = require('mongoose')

const { Schema, model } = mongoose

const categoriesSchema = new Schema({
     categories: {
         type: String
    }, 
}
)

const Categories = model('categorie', categoriesSchema)

module.exports = Categories

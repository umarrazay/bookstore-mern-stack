const express = require('express')
const booksRouter = express.Router()

const { getAllBooksRecords,
        getSingleBookRecord,
        createBookRecord,
        deleteSingleBookRecord,
        updateSingleBookRecord } = require('../controllers/BooksController')

booksRouter.get('/getBookRecords',getAllBooksRecords)
booksRouter.get('/getSingleBookRecord/:id',getSingleBookRecord)
booksRouter.post('/createBookRecord',createBookRecord)
booksRouter.delete('/deleteBookRecord/:id',deleteSingleBookRecord)
booksRouter.patch('/updateBookRecord/:id',updateSingleBookRecord)

module.exports = booksRouter;
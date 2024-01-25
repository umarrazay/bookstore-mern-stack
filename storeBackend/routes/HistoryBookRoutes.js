const express = require('express')
const hbRouter = express.Router()

const { getAllHistoryBooksRecords,
        getSingleHistoryBookRecord,
        createHistoryBookRecord,
        deleteSingleHistoryBookRecord,
        updateSingleHistoryBookRecord } = require('../controllers/HistoryBookController')

hbRouter.get('/getBookRecords',getAllHistoryBooksRecords)
hbRouter.get('/getSingleBookRecord/:id',getSingleHistoryBookRecord)
hbRouter.post('/createBookRecord',createHistoryBookRecord)
hbRouter.delete('/deleteBookRecord/:id',deleteSingleHistoryBookRecord)
hbRouter.patch('/updateBookRecord/:id',updateSingleHistoryBookRecord)

module.exports = hbRouter;
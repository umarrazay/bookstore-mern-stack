const express = require('express')
const progRouter = express.Router()

const { getAllProgrammingBooksRecords,
        getSingleProgrammingBookRecord,
        createProgrammingBookRecord,
        deleteSingleProgrammingBookRecord,
        updateSingleProgrammingBookRecord } = require('../controllers/ProgrammingBookController')

progRouter.get('/getBookRecords',getAllProgrammingBooksRecords)
progRouter.get('/getSingleBookRecord/:id',getSingleProgrammingBookRecord)
progRouter.post('/createBookRecord',createProgrammingBookRecord)
progRouter.delete('/deleteBookRecord/:id',deleteSingleProgrammingBookRecord)
progRouter.patch('/updateBookRecord/:id',updateSingleProgrammingBookRecord)

module.exports = progRouter;
    
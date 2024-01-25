const ProgrammingBook = require("../models/ProgrammingBookModel")
const mongoose = require("mongoose")


const getAllProgrammingBooksRecords = async (req, res) => {

    try {
        const programmingBookRecords = await ProgrammingBook.find({}).sort({createdAt:-1})
        res.status(200).json(programmingBookRecords)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getSingleProgrammingBookRecord = async (req, res) => {

    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const singleProgrammingBookRecord = await ProgrammingBook.findById(id)
        res.status(200).json(singleProgrammingBookRecord)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createProgrammingBookRecord = async (req, res) => {

    const { title, description, author, publishedDate, stock, imageUrl, category } = req.body;

    try {
        const createProgBookRecord = await ProgrammingBook.create({ title, description, author, publishedDate, stock, imageUrl, category })
        res.status(200).json(createProgBookRecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteSingleProgrammingBookRecord = async (req, res) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const deleteProgBookRecord = await ProgrammingBook.findOneAndDelete({_id:id})
        res.status(200).json({message:"record deleted successfully"})

    } catch (error) {
        res.status(400).json({message:"unable to delete book record" })
    }
}


const updateSingleProgrammingBookRecord = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such book exsists"})
    }

    const updateProgBookRecord = await HistoryBook.findOneAndUpdate({_id:id},{
       ...req.body
    })

    if(!updateProgBookRecord){
        return res.status(400).json({error:"unable to update data"})
    }

    res.status(200).json(updateProgBookRecord)
 
}

module.exports = {
    getAllProgrammingBooksRecords,
    getSingleProgrammingBookRecord,
    createProgrammingBookRecord,
    deleteSingleProgrammingBookRecord,
    updateSingleProgrammingBookRecord
}
const HistoryBook = require("../models/HistoryBookModel")
const mongoose = require("mongoose")


const getAllHistoryBooksRecords = async (req, res) => {

    try {
        const historybookdetails = await HistoryBook.find({}).sort({createdAt:-1})
        res.status(200).json(historybookdetails)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getSingleHistoryBookRecord = async (req, res) => {

    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const singlehistorybookdetails = await HistoryBook.findById(id)
        res.status(200).json(singlehistorybookdetails)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const createHistoryBookRecord = async (req, res) => {

    const { title, description, author, publishedDate, stock, imageUrl, category } = req.body;

    try {
        const createhistorybookrecord = await HistoryBook.create({ title, description, author, publishedDate, stock, imageUrl, category })
        res.status(200).json(createhistorybookrecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const deleteSingleHistoryBookRecord = async (req, res) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const deleteBookRecord = await HistoryBook.findOneAndDelete({_id:id})
        res.status(200).json({message:"record deleted successfully"})

    } catch (error) {
        res.status(400).json({message:"unable to delete book record" })
    }
}



const updateSingleHistoryBookRecord = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such book exsists"})
    }

    const updateSingleHistoryBookRecord = await HistoryBook.findOneAndUpdate({_id:id},{
       ...req.body
    })

    if(!updateSingleHistoryBookRecord){
        return res.status(400).json({error:"unable to update data"})
    }

    res.status(200).json(updateSingleHistoryBookRecord)
 
}


module.exports = {
    getAllHistoryBooksRecords,
    getSingleHistoryBookRecord,
    createHistoryBookRecord,
    deleteSingleHistoryBookRecord,
    updateSingleHistoryBookRecord
}
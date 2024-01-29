const books = require("../models/BooksModel")
const mongoose = require("mongoose")


const getAllBooksRecords = async (req, res) => {

    try {
        const allBookRecords = await books.find({}).sort({createdAt:-1})
        res.status(200).json(allBookRecords)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getSingleBookRecord = async (req, res) => {

    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const singleBookRecord = await books.findById(id)
        res.status(200).json(singleBookRecord)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createBookRecord = async (req, res) => {

    const { title, description, author, publishedDate, stock, image, price,  category } = req.body;

    try {
        const createBookRecord = await books.create({ title, description, author, publishedDate, stock, image, price ,category })
        res.status(200).json(createBookRecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const deleteSingleBookRecord = async (req, res) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such book id exist" })
        }

        const deleteBookRecord = await books.findOneAndDelete({_id:id})
        res.status(200).json({message:"record deleted successfully"})

    } catch (error) {
        res.status(400).json({message:"unable to delete book record" })
    }
}



const updateSingleBookRecord = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such book exsists"})
    }

    const updateSingleBookDetail = await books.findOneAndUpdate({_id:id},{
       ...req.body
    })

    if(!updateSingleBookDetail){
        return res.status(400).json({error:"unable to update data"})
    }

    res.status(200).json(updateSingleBookDetail)
 
}


module.exports = {
    getAllBooksRecords,
    getSingleBookRecord,
    createBookRecord,
    deleteSingleBookRecord,
    updateSingleBookRecord
}
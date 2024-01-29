const express = require('express');
const MainRoutes = express.Router();

const booksRoutes = require('./BooksRoutes');

// Api Routes
MainRoutes.use('/api/books', booksRoutes);

module.exports = MainRoutes;

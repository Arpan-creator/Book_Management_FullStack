const express = require("express");
const { getBooks, addBook, deleteBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/books", getBooks);     // Fetch all books
router.post("/books", addBook);     // Add a new book
router.delete("/books/_id", deleteBook); // Delete a book by ID

module.exports = router;

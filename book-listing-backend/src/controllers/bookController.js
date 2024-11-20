const Book = require("../models/Book");

// Fetch all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, description } = req.body;

  if (!title || !author || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newBook = new Book({ title, author, description });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
};

// Delete a book by ID
// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params._id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await Book.findByIdAndDelete(req.params._id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book", details: err.message });
  }
};

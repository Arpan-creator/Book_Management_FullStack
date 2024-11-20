import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import { getBooks } from "../api/books";

const Home = () => {
  const [books, setBooks] = useState([]); // Manage books state

  // Fetch books from the backend
  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  // Add a new book to the state
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Delete a book and update the state
  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-full bg-blue-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Listing Application</h1>
      <AddBook onAdd={handleAddBook} />
      <hr className="my-6" />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;

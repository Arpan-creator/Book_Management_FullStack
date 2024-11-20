import React, { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import { toast } from "react-toastify";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from the backend when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://book-management-fullstack-3.onrender.com/api/books");
        setBooks(response.data);
      } catch (err) {
        console.error("Failed to fetch books", err);
      }
    };
    fetchBooks();
  }, []);

  // Handle the delete operation
  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`https://book-management-fullstack-3.onrender.com/api/books/${id}`);
      setBooks(books.filter((book) => book._id !== id)); // Remove the deleted book from state
      toast.success("Book deleted successfully");
    } catch (err) {
      toast.error("Failed to delete the book.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-fuchsia-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4 text-center">
        Book List
      </h2>
      {books.length > 0 ? (
        <div className="space-y-4">
          {books.map((book) => (
            <BookItem key={book._id} book={book} onDelete={deleteBook} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No books available. Add a new book to get started!
        </p>
      )}
    </div>
  );
};

export default BookList;

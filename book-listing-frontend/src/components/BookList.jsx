import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto bg-fuchsia-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4 text-center">
        Book List
      </h2>
      {books.length > 0 ? (
        <div className="space-y-4">
          {books.map((book) => (
            <BookItem key={book._id} book={book} onDelete={onDelete} />
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

import React, { useState } from "react";
import { addBook } from "../api/books";
import { toast } from "react-toastify";

const AddBook = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.description) {
      try {
        const response = await addBook(formData);
        const newBook = response.data;

        toast.success("Book successfully added!");
        onAdd(newBook); // Notify parent
        setFormData({ title: "", author: "", description: "" }); // Reset form
      } catch (error) {
        console.error("Error adding book:", error);
        toast.error("Failed to add the book. Please try again.");
      }
    } else {
      toast.warn("All fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-fuchsia-200 shadow-lg rounded-lg p-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border px-4 py-2 rounded"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;

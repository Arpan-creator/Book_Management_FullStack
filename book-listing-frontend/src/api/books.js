import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getBooks = () => axios.get(`${BASE_URL}/books`);
export const addBook = (book) => axios.post(`${BASE_URL}/books`, book);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/books/${id}`);


export const fetchBooks = async () => {
    try {
      // Example: Make an API call to get books (replace with actual API URL)
      const response = await fetch("http://localhost:5000/api/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      return data;  // Return the list of books
    } catch (error) {
      console.error("Error fetching books:", error);
      return []; // Return an empty array on error
    }
  };